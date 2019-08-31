import api from './api';

export default {
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
    },
    getVote(id, token) {
        return api
            .request({
                method: 'get',
                url: `/proposals/${id}/vote`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    },
    updateVote(id, vote, token) {
        return api
            .request({
                method: 'patch',
                url: `/proposals/${id}/vote`,
                data: {
                    vote: vote
                },
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            })
            .catch(console.log)
    },
    createVote(id, vote, token) {
        return api
            .request({
                method: 'post',
                url: `/proposals/${id}/vote`,
                data: {
                    vote: vote
                },
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    },
    deleteVote(id, token) {
        return api
            .request({
                method: 'delete',
                url: `/proposals/${id}/vote`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    }
};
