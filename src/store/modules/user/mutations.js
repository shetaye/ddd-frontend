import {
    SET_USER,
    SET_USER_PROPOSALS,
    SET_USER_SERVERS,
    CLEAR_USER
} from './mutation-types';

export default {
    [SET_USER](state, { user }) {
        state.user = user;
    },
    [SET_USER_PROPOSALS](state, { proposals }) {
        state.proposals = proposals;
    },
    [SET_USER_SERVERS](state, { servers }) {
        state.servers = servers;
    },
    [CLEAR_USER](state) {
        state.user = {};
        state.proposals = [];
        state.servers = [];
    }
};
