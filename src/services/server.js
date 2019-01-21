import api from './api';
import Proposal from './proposal';

export default {
    getServers() {
        return {
            servers: [
                {
                    id: '0',
                    name: "Bob and Alice's Proposal Emporium!",
                    users: [0, 1],
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
                            ],
                            status: -1,
                            votes: [0, 4]
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
                            ],
                            status: 1,
                            votes: [10, 2]
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
                            ],
                            status: 0,
                            votes: [6, 19]
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
                                }
                            ],
                            status: 0,
                            votes: [4, 2]
                        }
                    ]
                }
            ]
        };
    },
    getServer(id) {
        return this.getServers().servers[id];
    }
};
