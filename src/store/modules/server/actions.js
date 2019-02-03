import user from '@/services/user';

import { SET_USER, SET_USER_PROPOSALS, SET_USER_SERVERS, CLEAR_USER } from './mutation-types';

export default {
    fetchUser({ commit, rootGetters, rootState }, { id }) {
        if(!rootGetters['auth/loggedIn']) {
            return;
        }
        user.getUser(id, rootState.auth.token)
        .then((user) => {
            commit(SET_USER, { user });
        })
        .catch(console.log);
    },
    fetchServers({ commit, rootGetters, rootState }, { id }) {
        if(!rootGetters['auth/loggedIn']) {
            return;
        }
        user.getServers(id, rootState.auth.token)
        .then((servers) => {
            commit(SET_USER_SERVERS, { servers });
        })
        .catch(console.log);
    },
    fetchProposals({ commit, rootGetters, rootState }, { id }) {
        if(!rootGetters['auth/loggedIn']) {
            return;
        }
        user.getProposals(id, rootState.auth.token)
        .then((proposals) => {
            commit(SET_USER_PROPOSALS, { proposals });
        })
        .catch(console.log);
    }
};
