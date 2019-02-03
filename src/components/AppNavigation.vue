<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="purple lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="purple darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
            <v-spacer class="hidden-md-and-up"/>
            <v-toolbar-title class="ma-0">
                    <router-link :to="{ name: 'home' }">{{appTitle}}</router-link>
            </v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down" :to="{ name: 'dashboard' }">Dashboard</v-btn>
            <v-btn flat class="hidden-sm-and-down" :to="{ name: 'home' }">New Proposal</v-btn>
            <v-spacer class="hidden-sm-and-down"/>
            <app-login-button/>
        </v-toolbar>
    </span>

</template>

<script>
import AppLoginButton from '@/components/AppLoginButton' 

export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Direct Discord Democracy',
            drawer: false,
            items: [
                { title: 'Dashboard' },
                { title: 'New Proposal' }
            ]
        };
    },
    components: {
        AppLoginButton
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
