<template>
    <span>
    <v-container>
        <v-layout align-center justify-center column>
            <div class="display-1 font-weight-light gray--text">Actions</div>
        </v-layout>
    </v-container>
    <v-container>
        <v-layout align-center justify-center row>
            <v-flex xs8>
                <v-card>
                    <v-list two-line class="pa-0">
                        <v-list-tile
                            v-for="action in actionsResolved"
                            :key="action.position"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title v-if="action.code==1000">Kick <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==1001">Ban <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2000">Create a role called <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2001">Give <code>{{action.p0}}</code> the permission <code>{{action.p1}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2002">Revoke <code>{{action.p0}}</code> the permission <code>{{action.p1}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2003">Turn <code>{{action.p1}}</code> for <code>{{action.p0}}</code> on</v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2004">Turn <code>{{action.p1}}</code> for <code>{{action.p0}}</code> off</v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2005">Move <code>{{action.p0}}</code> to <code>{{action.p1}}</code> in the hiearchy</v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2006">Remove <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2007">Add <code>{{action.p1}}</code> to <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==2008">Remove <code>{{action.p1}}</code> from <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3000">Create <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3001">Remove <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3002">Prohibt <code>{{action.p2}}</code> for <code>{{action.p1}}</code> on <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3003">Use <code>{{action.p1}}</code>'s default for <code>{{action.p2}}</code> on <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3004">Allow <code>{{action.p2}}</code> for <code>{{action.p1}}</code> on <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3005">Move <code>{{action.p1}}</code> to <code>{{action.p2}}</code> on <code>{{action.p0}}</code>'s override hiearchy</v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3006">Remove <code>{{action.p1}}</code>'s override in <code>{{action.p0}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==3007">Set <code>{{action.p1}}</code> in <code>{{action.p0}}</code> to <code>{{action.p2}}</code></v-list-tile-title>
                                <v-list-tile-title v-if="action.code==4000">Set <code>{{action.p0}}</code> to <code>{{action.p1}}</code></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container>
        <v-layout align-center column>
            <v-flex xs6>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template slot="activator">
                        <div class="text-xs-center">
                            <v-btn icon flat color="purple">
                                <v-icon large>add</v-icon>
                            </v-btn>
                        </div>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Add Action</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap column>
                                    <v-flex>
                                        <v-autocomplete
                                            v-model="code"
                                            label="Action Type"
                                            item-value="id"
                                            item-text="name"
                                            :items="autocompleteActions"
                                            required
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex v-if="code == 1000 || code == 1001">
                                        <v-autocomplete
                                            v-model="p0"
                                            label="User"
                                            item-value="id"
                                            item-text="name"
                                            :items="users"
                                            required
                                        ></v-autocomplete>
                                        <v-text-field
                                            v-if="code == 1000"
                                            v-model="p1"
                                            :rules="reasonRules"
                                            :counter="255"
                                            label="Kick reason"
                                            required
                                        ></v-text-field>
                                        <v-text-field
                                            v-if="code == 1001"
                                            v-model="p1"
                                            :rules="reasonRules"
                                            :counter="255"
                                            label="Ban reason"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex v-if="code == 2000">
                                        <v-text-field
                                            v-if="code == 2000"
                                            v-model="p0"
                                            :rules="nameRules"
                                            :counter="255"
                                            label="Role name"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex v-if="code == 2001 || code == 2002">
                                        <v-autocomplete
                                            v-model="p0"
                                            label="Role"
                                            item-value="id"
                                            item-text="name"
                                            :items="roles"
                                            required
                                        ></v-autocomplete>
                                        <v-autocomplete
                                            v-model="p1"
                                            label="Permission"
                                            item-value="id"
                                            item-text="name"
                                            :items="autocompleteRolePermissions"
                                            required
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex v-if="code == 2003 || code == 2004">
                                        <v-autocomplete
                                            v-model="p0"
                                            label="Role"
                                            item-value="id"
                                            item-text="name"
                                            :items="roles"
                                            required
                                        ></v-autocomplete>
                                        <v-autocomplete
                                            v-model="p1"
                                            label="Setting"
                                            item-value="id"
                                            item-text="name"
                                            :items="autocompleteRoleSettings"
                                            required
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex v-if="code == 2003 || code == 2004">
                                        <v-autocomplete
                                            v-model="p0"
                                            label="Role"
                                            item-value="id"
                                            item-text="name"
                                            :items="roles"
                                            required
                                        ></v-autocomplete>
                                        Position value not implemented
                                        
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat @click="dialog = false; add()">Add</v-btn>
                            <v-btn flat @click="dialog = false">Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
    </v-container>
    </span>
</template>

<script>

export default {
    name: 'AppProposalWizardActions',
    props: {
        value: Array,
        serverId: String,
        users: Array,
        roles: Array,
        channels: Array
    },
    // To call again if the value changes (no remount)
    watch: {
        code(newVal, oldVal) {
            // Clear params each time
            this.p0 = undefined;
            this.p1 = undefined;
            this.p2 = undefined;
        }
    },
    data() {
        return {
            actions: this.value,
            dialog: false,
            
            // Autocomplete's
            autocompleteActions: [
                { name: 'Kick', id: 1000 },
                { name: 'Ban', id: 1001 },
                { name: 'Create role', id: 2000 },
                { name: 'Grant a role a permission', id: 2001 },
                { name: 'Revoke a role\'s permission', id: 2002 },
                { name: 'Turn a role setting on', id: 2003 },
                { name: 'Turn role setting off', id: 2004 },
                { name: 'Move a role\'s position', id: 2005 },
                { name: 'Remove a role', id: 2006 },
                { name: 'Add a user to a role', id: 2007 },
                { name: 'Remove a user from a role', id: 2008 },
                { name: 'Create a channel', id: 3000 },
                { name: 'Remove a channel', id: 3001 },
                { name: 'Set a channel override to \'allow\'', id: 3002 },
                { name: 'Set a channel override to \'neutral\'', id: 3003 },
                { name: 'Set a channel override to \'prohibit\'', id: 3004 },
                { name: 'Move channel\'s position', id: 3005 },
                { name: 'Remove a channel override', id: 3006 },
                { name: 'Change a channel setting', id: 3004 },
                { name: 'Change server setting', id: 4000 }
            ],
            autocompleteRolePermissions: [
                { name: 'Administrator', id: 1000 },
                { name: 'View Audit Log', id: 1001 },
                { name: 'Manage Server', id: 1002 },
                { name: 'Manage Roles', id: 1003 },
                { name: 'Manage Channels', id: 1004 },
                { name: 'Kick Members', id: 1005 },
                { name: 'Ban Members', id: 1006 },
                { name: 'Create Instant Invite', id: 1007 },
                { name: 'Change Nickname', id: 1008 },
                { name: 'Manage Nicknames', id: 1009 },
                { name: 'Manage Emojis', id: 1010 },
                { name: 'Manage Webhooks', id: 1011 },
                { name: 'Read Text Channels & See Voice Channels', id: 1012 },
                { name: 'Send Message', id: 2000 },
                { name: 'Send TTS Messages', id: 2001 },
                { name: 'Manage Messages', id: 2002 },
                { name: 'Embed Links', id: 2003 },
                { name: 'Attach Files', id: 2004 },
                { name: 'Read Message History', id: 2005 },
                { name: 'Mention Everyone', id: 2006 },
                { name: 'Use External Emojis', id: 2007 },
                { name: 'Add Reactions', id: 2008 },
                { name: 'Connect', id: 3000 },
                { name: 'Speak', id: 3001 },
                { name: 'Mute Members', id: 3002 },
                { name: 'Deafen Members', id: 3003 },
                { name: 'Move Members', id: 3004 },
                { name: 'Use Voice Activity', id: 3005 },
                { name: 'Priority Speaker', id: 3006 }
            ],
            autocompleteRoleSettings: [
                { name: 'Display role members seperately from online members', id: 1000 },
                { name: 'Allow anyone to @mention this role', id: 1001 },
            ],
            // Params
            code: 0,
            p0: undefined,
            p1: undefined,
            p2: undefined,

            // Resolved params
            actionsResolved: [],

            // Rules
            reasonRules: [
                v => !!v || 'Reason is required',
                v => v.length <= 255 || 'Reason must be less than 255 characters'
            ],
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 255 || 'Name must be less than 255 characters'
            ],
        };
    },
    methods: {
        add() {
            this.actions.push({
                code: this.code,
                p0: this.p0,
                p1: this.p1,
                p2: this.p2,
                position: this.actions.length
            });
            this.actionsResolved.push({
                code: this.code,
                p0: this.resolvedp0,
                p1: this.resolvedp1,
                p2: this.resolvedp2,
                position: this.actions.length
            })
            this.$emit('added', this.actions);
        }
    },
    computed: {
        resolvedp0() {
            switch(this.code) {
                case 1000:
                case 1001:
                    return this.users.find((user) => {
                        return user.id == this.p0;
                    }).name;
                break;
                case 2000:
                    return this.p0;
                    break;
                case 2001:
                case 2002:
                    return this.roles.find((role) => {
                        return role.id == this.p0;
                    }).name;
                default:
                    return this.p0;
                break;
            }
        },
        resolvedp1() {
            switch(this.code) {
                case 1000:
                case 1001:
                    return this.p1;
                break;
                case 2000:
                    return this.p1;
                break;
                case 2001:
                case 2002:
                    return this.autocompleteRolePermissions.find((rolePermission) => {
                        return rolePermission.id == this.p1;
                    }).name;
                break;
                default:
                    return this.p1;
                break;
            }
        },
        resolvedp2() {
            switch(this.code) {
                case 1000:
                case 1001:
                    return this.p2;
                break;
                case 2000:
                    return this.p2;
                break;
                case 2001:
                case 2002:
                    return this.p2;
                break;
                default:
                    return this.p2;
                break;
            }
        }
    },
};
</script>

<style>
</style>
