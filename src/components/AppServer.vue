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
import AppDocumentLinkButton from '@/components/AppDocumentLinkButton';
import AppListProposals from '@/components/AppListProposals';
import AppServerUsers from '@/components/AppServerUsers';

import { mapState } from 'vuex';

export default {
    name: 'AppServer',
    props: {
        id: String
    },
    mounted() {
        /* Make action calls for user, server, and proposal data. */
        this.$store.dispatch('server/fetchServer', { id: this.$props.id });
        this.$store.dispatch('server/fetchUsers', { id: this.$props.id });
        this.$store.dispatch('server/fetchProposals', { id: this.$props.id });
    },
    computed: {
        ...mapState({
            server: state => state.server.server,
            proposals: state => state.server.proposals,
            users: state => state.server.users
        })
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
