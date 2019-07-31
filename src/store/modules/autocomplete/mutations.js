import {
    SET_CHANNELS_AUTOCOMPLETE,
    SET_ROLES_AUTOCOMPLETE,
    SET_SERVERS_AUTOCOMPLETE,
    SET_USERS_AUTOCOMPLETE
} from './mutation-types';

export default {
    [SET_CHANNELS_AUTOCOMPLETE](state, { channels }) {
        state.channels = channels;
    },
    [SET_ROLES_AUTOCOMPLETE](state, { roles }) {
        state.roles = roles;
    },
    [SET_USERS_AUTOCOMPLETE](state, { users }) {
        state.users = users;
    },
    [SET_SERVERS_AUTOCOMPLETE](state, { servers }) {
        state.servers = servers;
    }
};
