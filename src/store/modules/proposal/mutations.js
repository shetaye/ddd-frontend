import {
    SET_PROPOSAL,
    CLEAR_PROPOSAL,
    SET_PROPOSAL_VOTE,
    SET_PROPOSAL_SERVER,
    SET_PROPOSAL_AUTHOR
} from './mutation-types';

export default {
    [SET_PROPOSAL](state, { proposal }) {
        state.proposal = proposal;
    },
    [CLEAR_PROPOSAL](state) {
        state.proposal = {};
    },
    [SET_PROPOSAL_AUTHOR](state, { author }) {
        state.author = author;
    },
    [SET_PROPOSAL_SERVER](state, { server }) {
        state.server = server;
    },
    [SET_PROPOSAL_VOTE](state, { vote }) {
        state.vote = vote;
    }
};
