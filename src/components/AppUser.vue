<template>
    <span>
        <v-container>
            <v-layout align-center justify-center column>
                <v-flex>
                    <div class="display-3 font-weight-light black--text text-xs-center">{{ user.name }}</div>
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
                    <div class="display-2 font-weight-light black--text text-xs-center">Guilds</div>
                </v-flex>
            </v-layout>
        </v-container>
        <app-user-servers :servers="servers"/>
    </span>
</template>

<script>
import Proposal from '@/services/proposal'
import User from '@/services/user'
import Server from '@/services/server'

import AppDocumentLinkButton from '@/components/AppDocumentLinkButton'
import AppListProposals from '@/components/AppListProposals'
import AppUserServers from '@/components/AppUserServers'

export default {
    name: "AppUser",
    props: {
        id: Server
    },
    computed: {
        servers(){
            let servers = [];
            for(let id in this.user.servers){
                servers.push(Server.getServer(id))
            }
            return servers;
        },
        proposals(){
            return this.user.proposals;
        },
        user(){
            return User.getUser(parseInt(this.id))
        }
    },
    components: {
        AppListProposals,
        AppUserServers
    }
}
</script>

<style>

</style>
