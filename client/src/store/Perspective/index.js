const axios = require("axios");

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
      let messageToCheck = payload.message;

      axios
        .post("/", {
          messageToCheck: messageToCheck,
        })
        .then((res) => {
          console.log(res);
          const scores = res;

          commit("SET_SCORES", scores);
        });
    },
  },

  getters: {
    scores(state) {
      return state.scores;
    },
  },
};
