import io from 'socket.io-client';

import {
    SET_PROPOSAL_SOCKET,
    CLOSE_PROPOSAL_SOCKET
} from './mutation-types';

export default {
    openProposalSocket({ commit, state, dispatch }, { id }) {
        const socket = io(`${state.url}/proposal/${id}`);
        if(!socket) { return; }
        commit(SET_PROPOSAL_SOCKET, { socket });
        /* Setup callbacks */
        state.proposalSocket.on('refetchProposal', () => {
            dispatch('proposal/fetchProposal', { id }, { root: true });
        });
    },
    closeProposalSocket({ commit }) {
        commit(CLOSE_PROPOSAL_SOCKET);
    }
};
