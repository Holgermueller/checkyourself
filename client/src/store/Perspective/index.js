export default {
  state: {
    scores: null,
  },

  mutations: {
    SET_SCORES(state, payload) {
      state.scores = payload;
    },
  },

  actions: {
    getScores({ commit }, payload) {
      let scores = payload.message;

      commit("SET_SCORES", scores);
    },
  },

  getters: {
    scores(state) {
      return state.scores;
    },
  },
};
