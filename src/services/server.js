import api from './api';
import Proposal from './proposal';

export default {
    getServer(id, token) {
        return api
            .request({
                method: 'get',
                url: `/servers/${id}`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    },
    getMembers(id, token) {
        return api
            .request({
                method: 'get',
                url: `/servers/${id}/members`,
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
                url: `/servers/${id}/proposals`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    }
};
