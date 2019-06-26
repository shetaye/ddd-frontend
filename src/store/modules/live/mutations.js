import { SET_PROPOSAL_SOCKET, CLOSE_PROPOSAL_SOCKET } from './mutation-types';

export default {
    [SET_PROPOSAL_SOCKET](state, { socket }) {
        state.proposalSocket = socket;
    },
    [CLOSE_PROPOSAL_SOCKET](state) {
        if (state.proposalSocket) {
            state.proposalSocket.close();
        }
    }
};
