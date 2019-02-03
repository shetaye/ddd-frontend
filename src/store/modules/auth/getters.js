export default {
    loggedIn(state) {
        return state.token ? true : false;
    },
    authHeader(state) {
        return { 'Authorization': `Bearer ${state.token}` }
    }
}