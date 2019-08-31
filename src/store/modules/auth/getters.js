export default {
    loggedIn(state) {
        return state.token ? true : false;
    },
    token(state) {
        return state.token;
    },
    authHeader(state) {
        return { Authorization: `Bearer ${state.token}` };
    }
};
