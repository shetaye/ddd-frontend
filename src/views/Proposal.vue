<template>
    <span>
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
        <app-proposal-vote 
            :score="proposal.votes?proposal.votes[0] - proposal.votes[1]:0"
            v-model="vote"
            @vote-create="voteCreate()"
            @vote-change="voteUpdate()"
            @vote-remove="voteRemove()"/>
        <v-container>
            <v-layout align-center justify-center column>
                <div class="display-1 font-weight-light gray--text">Actions</div>
            </v-layout>
        </v-container>
        <app-proposal-actions :actions="proposal.actions"/>
    </span>
</template>

<script>
// Components
import AppDocumentLinkButton from '@/components/AppDocumentLinkButton';
import AppProposalVote from '@/components/AppProposalVote';
import AppProposalActions from '@/components/AppProposalActions';

// Services
import proposalService from '@/services/proposal';

// Live
import io from 'socket.io-client';

export default {
    name: 'Proposal',
    data() {
        return {
            proposal: {},
            author: {},
            server: {},
            vote: {},
            liveSocket: null,
        };
    },
    props: {
        id: String
    },
    components: {
        AppDocumentLinkButton,
        AppProposalVote,
        AppProposalActions,
    },
    mounted() {
        this.getProposal();
        this.getAuthor();
        this.getServer();
        this.getVote();

        // Setup socket
        // TODO: Change URL in production
        this.liveSocket = io(`http://ddd.io:1023/proposal/${this.id}`);
        this.liveSocket.on('refetchProposal', () => {
            this.getProposal();
        });
        this.liveSocket.on('refetchVote', () => {
            this.getVote();
        })

    },
    methods: {
        getProposal() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            proposalService.getProposal(this.id, token).then(proposal => {
                this.proposal = proposal;
            });
        },
        getAuthor() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            proposalService.getAuthor(this.id, token).then(author => {
                this.author = author;
            });
        },
        getServer() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            proposalService.getServer(this.id, token).then(server => {
                this.server = server;
            });
        },
        getVote() {
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            proposalService.getVote(this.id, token).then(vote => {
                this.vote = vote;
            });
        },
        voteCreate() {
            // Check if logged in first
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            proposalService.createVote(this.id, this.vote, token)
            .then((data) => {
                this.proposal = data.proposal;
                this.vote = data.vote;
            })
        },
        voteUpdate() {
            // Check if logged in first
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            proposalService.updateVote(this.id, this.vote, token)
            .then((data) => {
                this.proposal = data.proposal;
                this.vote = data.vote;
            })
        },
        voteRemove() {
            // Check if logged in first
            if(!this.$store.getters['auth/loggedIn']) { return; }
            const token = this.$store.getters['auth/token'];
            proposalService.deleteVote(this.id, token)
            .then((data) => {
                this.proposal = data.proposal;
                this.vote = data.vote;
            })
        }
    }
};
</script>

<style>
</style>
