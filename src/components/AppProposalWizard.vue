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
    <app-proposal-wizard-actions v-if="server" :serverId="server" v-model="actions"></app-proposal-wizard-actions>
    </span>
</template>

<script>
import { mapGetters } from 'vuex';

import AppProposalWizardActions from '@/components/AppProposalWizardActions';

export default {
    name: 'AppProposalWizard',
    mounted() {
        this.$store.dispatch('autocomplete/fetchServers', { id: 0 })
        
    },
    data: () => {
        return {
            name: '',
            actions: [],
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 255 || 'Name must be less than 255 characters'
            ],
            server: ''
        };
    },
    computed: {
        ...mapGetters({
            autocompleteServers: 'autocomplete/servers'
        })
    },
    components: {
        AppProposalWizardActions
    }
};
</script>

<style>
</style>
