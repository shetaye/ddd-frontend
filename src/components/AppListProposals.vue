<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <v-card>
                    <v-list two-line class="pa-0">
                        <template v-for="(proposal,index) in proposals">
                            <v-divider :key="index * 2"/>
                            <v-list-tile :key="(index * 2) + 1" :to="{ name: 'proposal', params: { id: proposal.id }}">
                                <v-list-tile-avatar v-if="proposal.status == -1">
                                    <v-icon :class="'red lighten-1 white--text'">clear</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-avatar v-if="proposal.status == 0">
                                    <v-icon :class="'grey lighten-1 white--text'">loop</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-avatar v-if="proposal.status == 1">
                                    <v-icon :class="'green lighten-1 white--text'">done</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ proposal.name }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ proposal.name }}</v-list-tile-sub-title>
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
    name: 'AppListProposals',
    props: {
        proposals: Array
    }
};
</script>

<style>
</style>
