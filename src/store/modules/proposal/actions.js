import proposal from '@/services/proposal';

import { SET_PROPOSAL, CLEAR_PROPOSAL, SET_PROPOSAL_SERVER, SET_PROPOSAL_AUTHOR } from './mutation-types';

export default {
    fetchProposal({ commit, rootGetters, rootState }, { id }) {
        if(!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal.getProposal(id, rootState.auth.token)
        .then((proposal) => {
            commit(SET_PROPOSAL, { proposal });
        })
        .catch(console.log);
    },
    fetchAuthor({ commit, rootGetters, rootState }, { id }) {
        if(!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal.getAuthor(id, rootState.auth.token)
        .then((author) => {
            commit(SET_PROPOSAL_AUTHOR, { author });
        })
        .catch(console.log);
    },
    fetchServer({ commit, rootGetters, rootState }, { id }) {
        if(!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal.getServer(id, rootState.auth.token)
        .then((server) => {
            commit(SET_PROPOSAL_SERVER, { server });
        })
        .catch(console.log);
    },
};
