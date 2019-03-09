import api from './api';

export default {
    getProposals() {
        return {
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
                    id: '1',
                    name: 'Proposal B',
                    author: '1',
                    created_on: '1548026809',
                    server: '0',
                    actions: [
                        {
                            position: '0',
                            action_code: 'KICK'
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
                },
                {
                    id: '3',
                    name: 'Proposal D',
                    author: '1',
                    created_on: '1548026802',
                    server: '0',
                    actions: [
                        {
                            position: '0',
                            action_code: 'KICK'
                        },
                        {
                            position: '1',
                            action_code: 'BAN'
                        },
                        {
                            position: '2',
                            action_code: 'ROLE_CHANGE'
                        },
                        {
                            position: '3',
                            action_code: 'ROLE_ADD'
                        }
                    ]
                }
            ]
        };
    },
    getProposal(id, token) {
        return api
            .request({
                method: 'get',
                url: `/proposals/${id}`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    },
    getAuthor(id, token) {
        return api
            .request({
                method: 'get',
                url: `/proposals/${id}/author`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    },
    getServer(id, token) {
        return api
            .request({
                method: 'get',
                url: `/proposals/${id}/server`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    }
};
