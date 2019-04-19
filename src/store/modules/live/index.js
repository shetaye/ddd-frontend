import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
    namespaced: true,
    state() {
        return {
            url: 'http://ddd.io:1023',
            proposalSocket: null,
        };
    },
    actions,
    getters,
    mutations
};
