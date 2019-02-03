import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import authModule from './modules/auth';
import userModule from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        botAddUrl:
            'https://discordapp.com/oauth2/authorize?client_id=431986820612620310&scope=bot&permissions=8'
    },
    actions,
    getters,
    mutations,
    modules: {
        'auth': authModule,
        'user': userModule,
    }
});
