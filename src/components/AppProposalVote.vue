<template>
    <v-container fluid grid-list-xl >
        <v-layout align-center justify-center row fill-height>
            <v-flex xs1>
                <div class="text-xs-center">
                    <v-btn
                    fab
                    :color=" vote.voted && vote.vote=='y' ? 'success' : 'grey lighten-3'"
                    @click="pushVote('y')">
                        <v-icon>thumb_up</v-icon>
                    </v-btn>
                </div>
            </v-flex>
            <v-flex xs1>
                <div class="font-weight-light headline text-xs-center">{{ score }}</div>
            </v-flex>
            <v-flex xs1>
                <div class="text-xs-center">
                    <v-btn
                    fab
                    :color=" vote.voted&& vote.vote=='n' ? 'error' : 'grey lighten-3'"
                    @click="pushVote('n')">
                        <v-icon>thumb_down</v-icon>
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'AppProposalVote',
    model: {
        prop: 'vote',
        event: 'vote-update',
    },
    props: {
        score: Number,
        vote: Object
    },
    methods: {
        pushVote(voteString) {
            // Build vote object

            // Vote object already exists, clicked on different vote
            if(this.vote.voted && voteString != this.vote.vote) {
                this.$emit('vote-update', {voted: true, vote: voteString});
                this.$emit('vote-change')
            }
            // Vote object already exists, clicked on same vote
            if(this.vote.voted && voteString == this.vote.vote) {
                this.$emit('vote-update', {voted: false});
                this.$emit('vote-remove');
            }
            // Vote object does not exist
            if(!this.vote.voted) {
                this.$emit('vote-update', {voted: true, vote: voteString});
                this.$emit('vote-create');
            }
        }
    }
};
</script>

<style>
</style>
