import { createStore } from 'vuex'

export default createStore({
    state: {
        isDownloadLinkVisible: true
    },
    mutations: {
        setDownloadLinkVisible(state, value) {
            state.isDownloadLinkVisible = value
        }
    },
    actions: {
        updateDownloadLinkVisible({ commit }, value) {
            commit('setDownloadLinkVisible', value)
        }
    }
})
