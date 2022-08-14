const axios = require("axios");

export default {
  state: {
    scores: [
      {
        ScoreName: "Toxicity",
        Score: 25,
        borderColor: "green",
        color: "rgba(69, 196, 150, 0.2)",
      },
      {
        ScoreName: "Severe Toxicity",
        Score: 35,
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
        Score: 55,
        borderColor: "#9932cc",
        color: "rgba(153, 50, 204, 0.2)",
      },
      {
        ScoreName: "Profanity",
        Score: 65,
        borderColor: "#ffa500",
        color: "rgba(255, 165, 0, 0.2)",
      },
      {
        ScoreName: "Threat",
        Score: 95,
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
      let messageToCheck = payload.message;

      const response = await axios.get(API_URL, messageToCheck);

      console.log("The response: " + response.data);

      const scores = response;

      commit("SET_SCORES", scores);

      // axios
      //   .get("/api/perspective", {
      //     messageToCheck: messageToCheck,
      //   })
      //   .then((res) => {
      //     console.log(messageToCheck);
      //     console.log("the res: " + res.data);
      //     const scores = res;

      //     commit("SET_SCORES", scores);
      //   });
    },
  },

  getters: {
    scores(state) {
      return state.scores;
    },
  },
};
