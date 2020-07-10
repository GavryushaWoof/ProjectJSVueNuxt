export const state = () => ({
    user: null,
    token: false
})

export const mutations = {
    setUsers(state, user) {
        state.user = user
    },
    setToken(state, token) {
        state.token = token
    }
}

export const actions = {
    async fetch({ dispatch }, authData) {
        const response = await this.$axios.$get('https://randomuser.me/api/?results');
        const user = response.results[0];
        dispatch('mapMockUserToStore', { user, email: authData.email });
    },
    mapMockUserToStore({ commit }, { user, email }) {
        const mappedUser = {
            email,
            name: user.name,
            avatar: user.picture.large
        };
        const mockToken = true;
        commit('setUsers', mappedUser);
        commit('setToken', mockToken);
        this.$router.push("/user");
    }
}

export const getters = {
    user: s => s.user,
    token: s => s.token
}