import actions from './actions';
import getters from './getters';
import mutations from './mutations';


export default {
    namespaced: true,
    state: {
        server: {},
        proposals: [],
        user: [],
    },
    actions,
    getters,
    mutations
};