<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <v-card>
                    <v-list two-line class="pa-0">
                        <template v-for="(server,index) in servers">
                            <v-divider :key="index * 2"/>
                            <v-list-tile :key="(index * 2) + 1" :to="{ name: 'server', params: { id: server.id }}">
                                <v-list-tile-avatar>
                                    <v-icon :class="'red lighten-1 white--text'">clear</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ server.name }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ server.name }}</v-list-tile-sub-title>
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
    name: "AppUserServers",
    props: {
        servers: Array
    }
}
</script>

<style>

</style>
