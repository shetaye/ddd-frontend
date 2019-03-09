import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
    namespaced: true,
    state() {
        return {
            refreshIntervalId: undefined,
            authCode: undefined,
            token: undefined,
            expires: undefined,
            url:
                'https://discordapp.com/api/oauth2/authorize?client_id=431986820612620310&redirect_uri=http%3A%2F%2Fddd.io%3A1024%2FauthRedirect&response_type=code&scope=identify%20guilds'
        };
    },
    actions,
    getters,
    mutations
};
