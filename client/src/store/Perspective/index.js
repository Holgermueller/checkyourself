import axios from "axios";

export default {
  state: {
    scores: [
      {
        id: "TOXICITY",
        ScoreName: "Toxicity",
        Score: 0,
        borderColor: "green",
        color: "rgba(69, 196, 150, 0.2)",
      },
      {
        id: "SEVERE_TOXICITY",
        ScoreName: "Severe Toxicity",
        Score: 0,
        borderColor: "#ffd700",
        color: "rgba(255, 215, 0, 0.2)",
      },
      {
        id: "IDENTITY_ATTACK",
        ScoreName: "Identity Attack",
        Score: 0,
        borderColor: "blue",
        color: "rgba(0, 0, 255, 0.2)",
      },
      {
        id: "INSULT",
        ScoreName: "Insult",
        Score: 0,
        borderColor: "#9932cc",
        color: "rgba(153, 50, 204, 0.2)",
      },
      {
        id: "PROFANITY",
        ScoreName: "Profanity",
        Score: 0,
        borderColor: "#ffa500",
        color: "rgba(255, 165, 0, 0.2)",
      },
      {
        id: "THREAT",
        ScoreName: "Threat",
        Score: 0,
        borderColor: "red",
        color: "rgba(217, 27, 66, 0.2)",
      },
      {
        id: "SEXUALLY_EXPLICIT",
        ScoreName: "Sexully Explicit",
        Score: 0,
        borderColor: "#ff1493",
        color: "rgba(255, 20, 147, 0.2)",
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
      try {
        const API_URL = "/api/perspective/";
        const messageToCheck = payload.message;

        let response = await axios.post(API_URL, {
          messageToCheck: messageToCheck,
        });

        const scoresToParse = response.data.attributeScores;

        const TOXICITY = {
          id: scoresToParse.TOXICITY,
          ScoreName: "Toxicity",
          Score: (scoresToParse.TOXICITY.summaryScore.value * 100).toFixed(0),
          borderColor: "green",
          color: "rgba(69, 196, 150, 0.2)",
        };

        const SEVERE_TOXICITY = {
          id: "SEVERE_TOXICITY",
          ScoreName: "Severe Toxicity",
          Score: (
            scoresToParse.SEVERE_TOXICITY.summaryScore.value * 100
          ).toFixed(0),
          borderColor: "#ffd700",
          color: "rgba(255, 215, 0, 0.2)",
        };

        const IDENTITY_ATTACK = {
          id: "IDENTITY_ATTACK",
          ScoreName: "Identity Attack",
          Score: (
            scoresToParse.IDENTITY_ATTACK.summaryScore.value * 100
          ).toFixed(0),
          borderColor: "blue",
          color: "rgba(0, 0, 255, 0.2)",
        };

        const INSULT = {
          id: "INSULT",
          ScoreName: "Insult",
          Score: (scoresToParse.INSULT.summaryScore.value * 100).toFixed(0),
          borderColor: "#9932cc",
          color: "rgba(153, 50, 204, 0.2)",
        };

        const PROFANITY = {
          id: "PROFANITY",
          ScoreName: "Profanity",
          Score: (scoresToParse.PROFANITY.summaryScore.value * 100).toFixed(0),
          borderColor: "#ffa500",
          color: "rgba(255, 165, 0, 0.2)",
        };

        const THREAT = {
          id: "THREAT",
          ScoreName: "Threat",
          Score: (scoresToParse.THREAT.summaryScore.value * 100).toFixed(0),
          borderColor: "red",
          color: "rgba(217, 27, 66, 0.2)",
        };

        const SEXUALLY_EXPLICIT = {
          id: "SEXUALLY_EXPLICIT",
          ScoreName: "Sexully Explicit",
          Score: (
            scoresToParse.SEXUALLY_EXPLICIT.summaryScore.value * 100
          ).toFixed(0),
          borderColor: "#ff1493",
          color: "rgba(255, 20, 147, 0.2)",
        };

        let scores = [
          TOXICITY,
          SEVERE_TOXICITY,
          IDENTITY_ATTACK,
          INSULT,
          PROFANITY,
          THREAT,
          SEXUALLY_EXPLICIT,
        ];

        commit("SET_SCORES", scores);
      } catch (error) {
        console.error(error.name);
        console.error(error.code);
        console.error(error.message);
        console.error(error.response.data);
      }
    },
  },

  getters: {
    scores(state) {
      return state.scores;
    },
  },
};
