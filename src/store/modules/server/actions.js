import server from '@/services/server';

import {
    SET_SERVER,
    SET_SERVER_PROPOSALS,
    SET_SERVER_USERS,
    CLEAR_SERVER
} from './mutation-types';

export default {
    fetchServer({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        server.getServer(id, rootState.auth.token).then(server => {
            commit(SET_SERVER, { server });
        });
    },
    fetchUsers({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        server.getMembers(id, rootState.auth.token).then(users => {
            commit(SET_SERVER_USERS, { users });
        });
    },
    fetchProposals({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        server.getProposals(id, rootState.auth.token).then(proposals => {
            commit(SET_SERVER_PROPOSALS, { proposals });
        });
    }
};
