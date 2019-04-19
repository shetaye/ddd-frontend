<template>
    <v-container fluid grid-list-xl >
        <v-layout align-center justify-center row fill-height>
            <v-flex xs1>
                <div class="text-xs-center">
                    <v-btn
                    fab
                    :color="vote.voted&&vote.vote=='y' ? 'success' : 'grey lighten-3'"
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
                    :color="vote.voted&&vote.vote=='n' ? 'error' : 'grey lighten-3'"
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
    props: {
        vote: Object,
        id: String,
        score: Number
    },
    methods: {
        pushVote(vote) {
            // Build vote object
            const oldVote = this.vote.vote;
            const newVote = vote;
            let voteO;
            if(!oldVote) {
                // User voting for first time
                voteO = {
                    voted: true,
                    vote: newVote
                };
            }
            else {
                // User switching vote
                if(newVote == oldVote) {
                    // User removes vote
                    voteO = {
                        voted: false
                    };
                }
                else {
                    // User switching vote
                    voteO = {
                        voted: true,
                        vote: newVote
                    };
                }
            }
            this.$store.dispatch('proposal/pushVote', { id: this.$props.id, vote: voteO})
        }
    }
}
</script>

<style>

</style>
