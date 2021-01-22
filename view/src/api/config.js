import {get, post, del, put} from '@/common/http';

export default {
    addConfig(params, configs) {
        return put('/api/config', params, configs);
    },
    updateConfig(id, params) {
        return post(`/api/config/${id}`, params);
    },
    deleteConfig(id) {
        return del(`/api/config/${id}`);
    },
    pageQueryConfig(params) {
        return get('/api/config', params);
    },
    getConfig(id) {
        return get(`/api/config/${id}`);
    }
}
