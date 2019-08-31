<template>
    <span>
        <v-container>
            <v-layout align-center justify-center column>
                <v-flex>
                    <div class="display-3 font-weight-light black--text text-xs-center">{{ server.name }}</div>
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
                    <div class="display-2 font-weight-light black--text text-xs-center">Members</div>
                </v-flex>
            </v-layout>
        </v-container>
        <app-server-users :users="users"/>
    </span>
</template>

<script>
// Components
import AppDocumentLinkButton from '@/components/AppDocumentLinkButton';
import AppListProposals from '@/components/AppListProposals';
import AppServerUsers from '@/components/AppServerUsers';

// Services
import serverService from '@/services/server';

export default {
    name: 'Server',
    props: {
        id: String
    },
    data() {
        return {
            server: {},
            proposals: [],
            users: [],
            liveSocket: undefined,
        }
    },
    mounted() {
        this.getServer();
        this.getProposals();
        this.getUsers();
    },
    methods: {
        getServer() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            serverService.getServer(this.id, token).then(server => {
                this.server = server;
            })
        },
        getProposals() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            serverService.getProposals(this.id, token).then(proposals => {
                this.proposals = proposals;
            })
        },
        getUsers() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            serverService.getMembers(this.id, token).then(users => {
                this.users = users;
            })
        }
    },
    components: {
        AppDocumentLinkButton,
        AppListProposals,
        AppServerUsers
    }
};
</script>

<style>
</style>
