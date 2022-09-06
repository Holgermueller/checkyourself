export default {
  state: {
    loading: false,
    error: null,
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },

  actions: {},

  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
};
