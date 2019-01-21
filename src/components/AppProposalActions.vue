<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <v-card>
                    <v-list two-line class="pa-0">
                        <template v-for="action in actions">
                            <v-divider :key="action.position * 2"/>
                            <v-list-tile :key="(action.position * 2) + 1" @click="1+1;">
                                <v-list-tile-avatar>
                                    <v-icon :class="'grey lighten-1 white--text'">play_arrow</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ action.action_code }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ action.action_code }}</v-list-tile-sub-title>
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
    name: "AppProposalActions",
    props: {
        actions: Array
    }
}
</script>

<style>

</style>
