export default {
  state: {
    loading: false,
    error: null,
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },

  actions: {},

  getters: {
    loading(state) {
      return state.loading;
    },
  },
};
