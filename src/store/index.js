import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        botAddUrl:
            'https://discordapp.com/oauth2/authorize?client_id=431986820612620310&scope=bot&permissions=8'
    },
    actions,
    getters,
    mutations
});
