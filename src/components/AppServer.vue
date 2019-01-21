<template>
    <span>
        <v-container>
            <v-layout align-center justify-center column>
                <v-flex>
                    <div class="display-3 font-weight-light black--text text-xs-center">{{ server.name }}</div>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout align-top justify-space-around column>
                <v-flex>
                    <div class="display-2 font-weight-light black--text text-xs-center">Proposals</div>
                </v-flex>
            </v-layout>
        </v-container>
        <app-list-proposals :proposals="proposals"/>
        <v-container>
            <v-layout align-top justify-space-around column>
                <v-flex>
                    <div class="display-2 font-weight-light black--text text-xs-center">Members</div>
                </v-flex>
            </v-layout>
        </v-container>
        <app-server-users :users="users"/>
    </span>
</template>

<script>
import Proposal from '@/services/proposal'
import User from '@/services/user'
import Server from '@/services/server'

import AppDocumentLinkButton from '@/components/AppDocumentLinkButton'
import AppListProposals from '@/components/AppListProposals'
import AppServerUsers from '@/components/AppServerUsers'

export default {
    name: 'AppServer',
    props: {
        id: String
    },
    computed: {
        server(){
            return Server.getServer(parseInt(this.id))
        },
        proposals(){
            return this.server.proposals;
        },
        users(){
            let users = [];
            for(let id in this.server.users){
                users.push(User.getUser(id))
            }
            return users;
        }
    },
    components: {
        AppDocumentLinkButton,
        AppListProposals,
        AppServerUsers
    }
}
</script>

<style>

</style>
