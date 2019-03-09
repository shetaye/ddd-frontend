import {
    SET_AUTH_CODE,
    SET_AUTH_TOKENS,
    START_INTERVAL,
    CANCEL_INTERVAL
} from './mutation-types';

export default {
    [SET_AUTH_CODE](state, code) {
        state.authCode = code;
    },
    [SET_AUTH_TOKENS](state, { token, refresh, expires }) {
        state.token = token;
        state.refresh = refresh;
        state.expires = expires;
    },
    /* SUPER big hack of passing in dispatch TODO: Get rid of this */
    [START_INTERVAL](state, { dispatch }) {
        state.refreshIntervalId = setInterval(function() {
            state.token = undefined;
            state.expires = undefined;
            state.refreshIntervalId = undefined;
            dispatch('refresh');
        }, state.expires * 1000);
    },
    [CANCEL_INTERVAL](state) {
        if (!state.refreshIntervalId) {
            return;
        }
        clearInterval(state.refreshIntervalId);
    }
};
