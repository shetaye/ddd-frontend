<template>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs6>
                <v-card>
                    <v-list two-line class="pa-0">
                        <v-list-tile
                            v-for="action in actions"
                            :key="action.position"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title v-if="action.code==1000">Kick <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==1001">Ban <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2000">Create a role called <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2001">Change <code>{{action.p1}}</code> in <code>{{action.p0}}</code> to <code>{{action.p2}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2002">Change <code>{{action.p1}}</code> in <code>{{action.p0}}</code> to <code>{{action.p2}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2003">Remove a role called <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2004">Add <code>{{action.p1}}</code> to <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2005">Remove <code>{{action.p1}}</code> from <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3000">Create a channel called <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3001">Remove a channel called <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3002">Change <code>{{action.p1}}</code> in <code>{{action.p0}}</code> to <code>{{action.p2}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3003">Change <code>{{action.p1}}</code> in <code>{{action.p0}}</code> to <code>{{action.p2}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==4000">Change <code>{{action.p0}}</code> to <code>{{action.p1}}</code></v-list-tile-title>

                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AppProposalActions',
    props: {
        actions: Array
    },
    data() {
        return {
            parameterFormat: {
                1000: 'US',
                1001: 'US',
                2000: 'RS',
                2001: 'RPV',
                2002: 'RSV',
                2003: 'R',
                2004: 'RU',
                2005: 'RU',
                3000: 'CS',
                3001: 'C',
                3002: 'CPV',
                3003: 'CSV',
                4000: 'SV'
            }
        };
    }
};
</script>

<style>
</style>
