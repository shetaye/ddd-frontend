<template>
    <span>
        <v-btn v-if="!this.loggedIn" @click="discordRedirect()" color="purple lighten-3" class="hidden-sm-and-down">LOG IN</v-btn>
        <v-avatar v-else>
            <router-link :to="{ name: 'user', params: { id: user.id } }">
                <img v-if="this.$store.getters['currentUser/user']" :src="`https://cdn.discordapp.com/avatars/${this.user.id}/${this.user.avatar_hash}.png?size=40`">
            </router-link>
        </v-avatar>
    </span>
</template>

<script>
import User from '@/store/modules/user';
import { mapGetters } from 'vuex';

export default {
    name: 'AppNavbarProfile',
    created() {
        if (!this.$store.state['currentUser'] && this.loggedIn) {
            this.$store.registerModule('currentUser', User);
            this.$store.dispatch('currentUser/fetchUser', { id: 0 });
        }
    },
    updated() {
        if (!this.$store.state['currentUser']) {
            if (this.loggedIn) {
                this.$store.registerModule('currentUser', User);
                /* Special case ID = 0 for current user */
                this.$store.dispatch('currentUser/fetchUser', { id: 0 });
            } else {
                this.$store.unregisterModule('currentUser');
            }
        }
    },
    methods: {
        discordRedirect() {
            window.location.href = `${
                this.$store.state.auth.url
            }&state=${this.generateState()}`;
        },
        generateState() {
            /* Generate state */
            let authState = new Uint32Array(1);
            if (window.crypto.getRandomValues) {
                window.crypto.getRandomValues(authState);
            } else {
                authState[0] = 0;
            }
            authState = authState[0];
            console.log(authState);
            window.localStorage.setItem('state', authState);
            return authState;
        }
    },
    computed: {
        ...mapGetters({
            loggedIn: 'auth/loggedIn',
            user: 'currentUser/user'
        })
    }
};
</script>

<style>
</style>
