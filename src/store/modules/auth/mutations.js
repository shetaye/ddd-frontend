import { SET_AUTH_CODE, SET_AUTH_TOKENS } from './mutation-types';

export default {
    [SET_AUTH_CODE](state, code) {
        state.authCode = code;
    },
    [SET_AUTH_TOKENS](state, { token, refresh, expires }){
        state.token = token;
        state.refresh = refresh;
        state.expires = expires;
    }
};
