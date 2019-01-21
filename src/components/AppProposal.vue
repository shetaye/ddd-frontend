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
        <v-container>
            <v-layout align-center justify-center column>
                <div class="display-1 font-weight-light gray--text">Actions</div>
            </v-layout>
        </v-container>
        <app-proposal-actions :actions="actions"/>
    </span>
</template>

<script>
import Proposal from '@/services/proposal'
import User from '@/services/user'
import Server from '@/services/server'

import AppProposalActions from '@/components/AppProposalActions'
import AppDocumentLinkButton from '@/components/AppDocumentLinkButton'

export default {
    name: 'AppProposal',
    props: {
        id: String
    },
    computed: {
        proposal(){
            return Proposal.getProposal(parseInt(this.id))
        },
        author(){
            return User.getUser(parseInt(this.proposal.author))
        },
        actions(){
            return this.proposal.actions
        },
        server(){
            return Server.getServer(parseInt(this.proposal.server))
        }
    },
    components: {
        AppProposalActions,
        AppDocumentLinkButton
    }
}
</script>

<style>

</style>
