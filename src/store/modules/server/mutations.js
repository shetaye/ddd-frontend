import {
    SET_SERVER,
    SET_SERVER_PROPOSALS,
    SET_SERVER_USERS,
    CLEAR_SERVER
} from './mutation-types';

export default {
    [SET_SERVER](state, { server }) {
        state.server = server;
    },
    [SET_SERVER_PROPOSALS](state, { proposals }) {
        state.proposals = proposals;
    },
    [SET_SERVER_USERS](state, { users }) {
        state.users = users;
    },
    [CLEAR_SERVER](state) {
        state.server = {};
        state.proposals = [];
        state.users = [];
    }
};
