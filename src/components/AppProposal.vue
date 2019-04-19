<template>
    <span v-if="proposal && vote && author && server">
        <v-container>
            <v-layout align-center justify-center column>
                <v-flex>
                    <div class="display-4 font-weight-light black--text text-xs-center">{{ proposal.name }}</div>
                </v-flex>
                <v-container fluid grid-list-xl>
                    <v-layout justify-center align-beginning row>
                        <app-document-link-button :subTitle="'Author'" :title="author.name" :location="{ name:'user', params: { id: author.id }}"/>
                        <app-document-link-button :subTitle="'Guild'" :title="server.name" :location="{ name:'server', params: { id: server.id }}"/>
                    </v-layout>
                </v-container>
            </v-layout>
        </v-container>
        <app-proposal-vote :vote="vote" :id="id" :score="proposal.votes?proposal.votes[0] - proposal.votes[1]:0"/>
        <v-container>
            <v-layout align-center justify-center column>
                <div class="display-1 font-weight-light gray--text">Actions</div>
            </v-layout>
        </v-container>
        <app-proposal-actions :actions="actions"/>
    </span>
</template>

<script>
import { mapState } from 'vuex';

import io from 'socket.io-client';

import AppProposalActions from '@/components/AppProposalActions';
import AppDocumentLinkButton from '@/components/AppDocumentLinkButton';
import AppProposalVote from '@/components/AppProposalVote';

export default {
    name: 'AppProposal',
    props: {
        id: String
    },
    mounted() {
        /* Make action calls for user, server, proposal, and live data. */
        this.$store.dispatch('proposal/fetchProposal', { id: this.$props.id });
        this.$store.dispatch('proposal/fetchAuthor', { id: this.$props.id });
        this.$store.dispatch('proposal/fetchVote', { id: this.$props.id });
        this.$store.dispatch('proposal/fetchServer', { id: this.$props.id });
        this.$store.dispatch('live/openProposalSocket', { id: this.$props.id });
    },
    beforeDestroy() {
        this.$store.dispatch('live/closeProposalSocket', { id: this.$props.id });
    },
    computed: {
        ...mapState({
            proposal: state => state.proposal.proposal,
            vote: state => state.proposal.vote,
            author: state => state.proposal.author,
            server: state => state.proposal.server,
            actions: state => state.proposal.proposal.actions
        }),
    },
    components: {
        AppProposalActions,
        AppDocumentLinkButton,
        AppProposalVote,
    }
};
</script>

<style>
</style>
