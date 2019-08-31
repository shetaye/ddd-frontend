<template>
    <span>
    <v-container>
        <v-layout align-center justify-center>
            <v-flex xs6>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="255"
                    label="Proposal Name"
                    required
                ></v-text-field>
                <v-autocomplete
                    v-model="server"
                    label="Server"
                    item-value="id"
                    item-text="name"
                    :items="autocompleteServers"
                    required
                ></v-autocomplete>
            </v-flex>
        </v-layout>
    </v-container>
    <app-proposal-wizard-actions
        v-if="server"
        v-model="actions"
        :serverId="server"
        :users="autocompleteUsers"
        :roles="autocompleteRoles"
        :channels="autocompleteChannels"
    ></app-proposal-wizard-actions>
    </span>
</template>

<script>
// Components
import AppProposalWizardActions from '@/components/AppProposalWizardActions';

// Services
import autocompleteService from '@/services/autocomplete';

export default {
    name: 'ProposalWizard',
    data() {
        return {
            name: '',
            actions: [],
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 255 || 'Name must be less than 255 characters'
            ],
            server: '',
            // Autocompletes
            autocompleteServers: [],
            autocompleteUsers: [],
            autocompleteRoles: [],
            autocompleteChannels: [],
        };
    },
    components: {
        AppProposalWizardActions
    },
    mounted() {
        // Fetch servers
        this.getAutocompleteServers()
    },
    methods: {
        getAutocompleteServers() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            // id == 0 for current user
            autocompleteService.getServers(0, token).then(servers => {
                this.autocompleteServers = servers.map((server) => {
                    return {
                        id: server.id,
                        name: server.name
                    }
                })
            });
        },

        getAutocompleteData() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            // id == 0 for current user
            autocompleteService.getServerAutocomplete(this.server, token).then(data => {
                this.autocompleteUsers = data.users;
                this.autocompleteRoles = data.roles;
                this.autocompleteChannels = data.channels;
            });
        }
    },
    watch: {
        server(newId, oldId) {
            this.getAutocompleteData()
        }
    }
};
</script>

<style>
</style>
