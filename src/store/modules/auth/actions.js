import auth from '@/services/auth'
import { SET_AUTH_CODE, SET_AUTH_TOKENS } from './mutation-types';

export default {
    fromRedirect({ commit, dispatch }, { code }){
        commit(SET_AUTH_CODE, code);
        dispatch('login');
    },
    login({ commit, state }){
        auth.login(state.authCode)
        .then((res) => {
            commit(SET_AUTH_TOKENS, {
                token: res.data.access_token,
                refresh: res.data.refresh_token,
                expires: res.data.expires_in
            });
            /* Set localstorage */
            window.localStorage.setItem('access_token', res.data.access_token);
            window.localStorage.setItem('refresh_token', res.data.refresh_token);
            window.localStorage.setItem('expiration', Math.floor(Date.now() / 1000) + res.data.expires_in);
        })
        .catch(console.log);
    },
    loadTokens({ commit }) {
        const token = window.localStorage.getItem('access_token');
        const refresh = window.localStorage.getItem('refresh_token');
        const expiration = window.localStorage.getItem('expiration');
        if(Math.floor(Date.now() / 1000) < expiration - 10 && token && refresh) {
            commit(SET_AUTH_TOKENS, {
                token: token,
                refresh: refresh,
                expires: expiration - Math.floor(Date.now() / 1000)
            });
        }
    }
};
