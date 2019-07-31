import api from './api';

export default {
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
    getServerAutocomplete(id, token) {
        return api
            .request({
                method: 'get',
                url: `/servers/${id}/autocomplete`,
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                return result.data;
            });
    }
}