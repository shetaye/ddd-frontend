export default {
    servers(state) {
        return state.servers.map(server => {
            return {
                id: server.id,
                name: server.name
            };
        });
    },
    users(state) {
        return state.users;
    },
    roles(state) {
        return state.roles;
    },
    channels(state) {
        return state.channels;
    }
};
