import actions from './actions';
import getters from './getters';
import mutations from './mutations';


export default {
    namespaced: true,
    state: {
        proposal: {},
        author: {},
        server: {}
    },
    actions,
    getters,
    mutations
};
