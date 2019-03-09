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
import AppDocumentLinkButton from '@/components/AppDocumentLinkButton';
import AppListProposals from '@/components/AppListProposals';
import AppUserServers from '@/components/AppUserServers';

import { mapState } from 'vuex';

export default {
    name: 'AppUser',
    props: {
        id: String
    },
    mounted() {
        /* Make action calls for user, server, and proposal data. */
        this.$store.dispatch('user/fetchUser', { id: this.$props.id });
        this.$store.dispatch('user/fetchServers', { id: this.$props.id });
        this.$store.dispatch('user/fetchProposals', { id: this.$props.id });
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
            proposals: state => state.user.proposals,
            servers: state => state.user.servers
        })
    },
    components: {
        AppListProposals,
        AppUserServers
    }
};
</script>

<style>
</style>
