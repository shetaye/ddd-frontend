import auth from '@/services/auth';
import {
    SET_AUTH_CODE,
    SET_AUTH_TOKENS,
    START_INTERVAL,
    CANCEL_INTERVAL
} from './mutation-types';

export default {
    fromRedirect({ commit, dispatch }, { code }) {
        commit(SET_AUTH_CODE, code);
        dispatch('login');
    },
    /* Can be called any time not logged in */
    login({ commit, state, dispatch }) {
        auth.login(state.authCode).then(res => {
            commit(CANCEL_INTERVAL);
            commit(SET_AUTH_TOKENS, {
                token: res.data.access_token,
                refresh: res.data.refresh_token,
                expires: res.data.expires_in
            });
            /* Start the timer */
            commit(START_INTERVAL, { dispatch });
            /* Set localstorage */
            window.localStorage.setItem('access_token', res.data.access_token);
            window.localStorage.setItem(
                'refresh_token',
                res.data.refresh_token
            );
            window.localStorage.setItem(
                'expiration',
                Math.floor(Date.now() / 1000) + res.data.expires_in
            );
        });
    },
    /* Called automatically by refresher and at page startup */
    refresh({ commit, state, dispatch }) {
        auth.refresh(state.refresh).then(res => {
            commit(CANCEL_INTERVAL);
            commit(SET_AUTH_TOKENS, {
                token: res.data.access_token,
                refresh: res.data.refresh_token,
                expires: res.data.expires_in
            });
            /* Start timer */
            commit(START_INTERVAL, { dispatch });
            /* Set localstorage */
            window.localStorage.setItem('access_token', res.data.access_token);
            window.localStorage.setItem(
                'refresh_token',
                res.data.refresh_token
            );
            window.localStorage.setItem(
                'expiration',
                Math.floor(Date.now() / 1000) + res.data.expires_in
            );
        });
    },
    /* Called only at page startup */
    loadTokens({ commit, dispatch }) {
        const token = window.localStorage.getItem('access_token');
        const refresh = window.localStorage.getItem('refresh_token');
        const expiration = window.localStorage.getItem('expiration');
        /* Check if the tokens are expired */
        if (
            expiration &&
            token &&
            refresh &&
            Math.floor(Date.now() / 1000) < expiration - 10
        ) {
            commit(SET_AUTH_TOKENS, {
                token: token,
                refresh: refresh,
                expires: expiration - Math.floor(Date.now() / 1000)
            });
            /* Reset timer */
            commit(CANCEL_INTERVAL);
            commit(START_INTERVAL, { dispatch });
        } else if (refresh) {
            /* Else refresh */
            /* I still need to access the refresh token, set other to null to make sure I stay 'logged out' */
            commit(SET_AUTH_TOKENS, {
                token: null,
                refresh: refresh,
                expires: null
            });
            dispatch('refresh');
        }
    }
};
