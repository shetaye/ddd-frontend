<template>
    <span>
        <v-container>
            <v-layout align-center justify-center column>
                <v-flex>
                    <div class="display-3 font-weight-light black--text text-xs-center">{{ user.name }}</div>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout align-top justify-space-around column>
                <v-flex>
                    <div class="display-2 font-weight-light black--text text-xs-center">Proposals</div>
                </v-flex>
            </v-layout>
        </v-container>
        <app-list-proposals :proposals="proposals"/>
        <v-container>
            <v-layout align-top justify-space-around column>
                <v-flex>
                    <div class="display-2 font-weight-light black--text text-xs-center">Guilds</div>
                </v-flex>
            </v-layout>
        </v-container>
        <app-user-servers :servers="servers"/>
    </span>
</template>

<script>
// Components
import AppDocumentLinkButton from '@/components/AppDocumentLinkButton';
import AppListProposals from '@/components/AppListProposals';
import AppUserServers from '@/components/AppUserServers';

// Services
import userService from '@/services/user';

export default {
    name: 'User',
    props: {
        id: String
    },
    data() {
        return {
            user: {},
            proposals: [],
            servers: [],
        };
    },
    mounted() {
        this.getUser();
        this.getProposals();
        this.getServers();
    },
    methods: {
        getUser() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            userService.getUser(this.id, token).then(user => {
                this.user = user;
            })
        },
        getProposals() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            userService.getProposals(this.id, token).then(proposals => {
                this.proposals = proposals;
            })
        },
        getServers() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            userService.getServers(this.id, token).then(servers => {
                this.servers = servers;
            })
        }
    },
    components: {
        AppDocumentLinkButton,
        AppListProposals,
        AppUserServers
    }
};
</script>

<style>
</style>
