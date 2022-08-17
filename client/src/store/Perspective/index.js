import axios from "axios";

export default {
  state: {
    scores: [
      {
        ScoreName: "Toxicity",
        Score: 0,
        borderColor: "green",
        color: "rgba(69, 196, 150, 0.2)",
      },
      {
        ScoreName: "Severe Toxicity",
        Score: 0,
        borderColor: "#ffd700",
        color: "rgba(255, 215, 0, 0.2)",
      },
      {
        ScoreName: "Identity Attack",
        Score: 0,
        borderColor: "blue",
        color: "rgba(0, 0, 255, 0.2)",
      },
      {
        ScoreName: "Insult",
        Score: 0,
        borderColor: "#9932cc",
        color: "rgba(153, 50, 204, 0.2)",
      },
      {
        ScoreName: "Profanity",
        Score: 0,
        borderColor: "#ffa500",
        color: "rgba(255, 165, 0, 0.2)",
      },
      {
        ScoreName: "Threat",
        Score: 0,
        borderColor: "red",
        color: "rgba(217, 27, 66, 0.2)",
      },
    ],
  },

  mutations: {
    SET_SCORES(state, payload) {
      state.scores = payload;
    },
  },

  actions: {
    async getScores({ commit }, payload) {
      const API_URL = "/api/perspective/";
      const messageToCheck = payload.message;

      let response = await axios.post(API_URL, messageToCheck);

      console.log(response);

      const scores = response.data;

      commit("SET_SCORES", scores);
    },
  },

  getters: {
    scores(state) {
      return state.scores;
    },
  },
};
