<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <v-card>
                    <v-list two-line class="pa-0">
                        <template v-for="(user,index) in users">
                            <v-divider :key="index * 2"/>
                            <v-list-tile :key="(index * 2) + 1" :to="{ name: 'user', params: { id: user.id }}">
                                <v-list-tile-avatar>
                                    <img :src="`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar_hash}.png?size=40`">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ user.name }}</v-list-tile-title>
                                    <v-list-tile-sub-title>Role Name</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    name: 'AppServerUsers',
    props: {
        users: Array
    }
};
</script>

<style>
</style>
