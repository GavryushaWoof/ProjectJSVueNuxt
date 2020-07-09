export const state = () => ({
    user: [],
    email: '',
})

export const mutations = {
    setUsers(state, user) {
        state.user = user
    },
    addEmailToStore(state, email) {
        state.obj.email = email
    }
}

export const actions = {
    async fetch({ commit }) {
        const user = await this.$axios.$get('https://randomuser.me/api/?results')
        commit('setUsers', user)
    }
}

export const getters = {
    user: s => s.user
}