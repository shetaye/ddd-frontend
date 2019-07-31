import autocomplete from '@/services/autocomplete';

import {
    SET_CHANNELS_AUTOCOMPLETE,
    SET_ROLES_AUTOCOMPLETE,
    SET_SERVERS_AUTOCOMPLETE,
    SET_USERS_AUTOCOMPLETE
} from './mutation-types';

export default {
    fetchServers({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        autocomplete.getServers(id, rootState.auth.token).then(servers => {
            commit(SET_SERVERS_AUTOCOMPLETE, { servers });
        });
    },
    fetchServerAutocomplete({ commit, rootGetters, rootState }, { id }) {
        if (!rootGetters['auth/loggedIn']) {
            return;
        }
        autocomplete.getServerAutocomplete(id, rootState.auth.token).then(autocompleteData => {
            commit(SET_ROLES_AUTOCOMPLETE, { roles: autocompleteData.roles });
            commit(SET_USERS_AUTOCOMPLETE, { users: autocompleteData.users });
            commit(SET_CHANNELS_AUTOCOMPLETE, { roles: autocompleteData.channels });
        });
    },
};
