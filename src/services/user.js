import api from './api';

export default {
    getUsers() {
        return {
            users: [
                {
                    id: '0',
                    name: 'alice#0000',
                    servers: [0],
                    proposals: [
                        {
                            id: '0',
                            name: 'Proposal A',
                            author: '0',
                            created_on: '1548026801',
                            server: '0',
                            actions: [
                                {
                                    position: '0',
                                    action_code: 'KICK'
                                },
                                {
                                    position: '1',
                                    action_code: 'BAN'
                                }
                            ]
                        },
                        {
                            id: '2',
                            name: 'Proposal C',
                            author: '0',
                            created_on: '1548026804',
                            server: '0',
                            actions: [
                                {
                                    position: '0',
                                    action_code: 'BAN'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '1',
                    name: 'bob#0001',
                    servers: [0],
                    proposals: [
                        {
                            id: '0',
                            name: 'Proposal A',
                            author: '0',
                            created_on: '1548026801',
                            server: '0',
                            actions: [
                                {
                                    position: '0',
                                    action_code: 'KICK'
                                },
                                {
                                    position: '1',
                                    action_code: 'BAN'
                                }
                            ]
                        },
                        {
                            id: '2',
                            name: 'Proposal C',
                            author: '0',
                            created_on: '1548026804',
                            server: '0',
                            actions: [
                                {
                                    position: '0',
                                    action_code: 'BAN'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    getUser(id, token) {
        return api
            .request({
                method: 'get',
                url: `/users/${id}`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    },
    getServers(id, token) {
        return api
            .request({
                method: 'get',
                url: `/users/${id}/servers`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    },
    getProposals(id, token) {
        return api
            .request({
                method: 'get',
                url: `/users/${id}/proposals`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    }
};
