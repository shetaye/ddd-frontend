import proposal from '@/services/proposal';

import {
    SET_PROPOSAL,
    CLEAR_PROPOSAL,
    SET_PROPOSAL_VOTE,
    SET_PROPOSAL_SERVER,
    SET_PROPOSAL_AUTHOR
} from './mutation-types';

export default {
    fetchProposal({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal.getProposal(id, rootState.auth.token).then(proposal => {
            commit(SET_PROPOSAL, { proposal });
        });
    },
    fetchAuthor({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal.getAuthor(id, rootState.auth.token).then(author => {
            commit(SET_PROPOSAL_AUTHOR, { author });
        });
    },
    fetchServer({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal.getServer(id, rootState.auth.token).then(server => {
            commit(SET_PROPOSAL_SERVER, { server });
        });
    },
    fetchVote({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal.getVote(id, rootState.auth.token).then(vote => {
            commit(SET_PROPOSAL_VOTE, { vote });
        });
    },
    pushVote({ commit, rootGetters, rootState }, { id, vote }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        proposal
            .postVote(id, vote, rootState.auth.token)
            .then(({ proposal, vote }) => {
                commit(SET_PROPOSAL, { proposal });
                commit(SET_PROPOSAL_VOTE, { vote });
            });
    }
};
