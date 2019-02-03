import api from './api';

export default {
    login(access_code) {
        return api.request({
            method: 'post',
            url: '/auth/token',
            data: {
                code: access_code
            }
        });
    },
    refresh(refresh_token) {
        //
    }
};
