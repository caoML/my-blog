const app = {
  state: {
    scrollTop: 0
  },
  mutations: {
    SET_SCROLL: (state, num) => {
      state.scrollTop = num
    }
  },
  actions: {
    changeScroll ({commit}, val) {
      commit('SET_SCROLL', val)
    }
  }
}
export default app
