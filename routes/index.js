const url = require("url");
const express = require("express");
const router = express.Router();

const API_KEY = process.env.API_KEY;
const DISCOVERY_URL = process.env.DISCOVERY_URL;

router.get("/", async (req, res) => {
  try {
    google
      .discoverAPI(DISCOVERY_URL)
      .then((client) => {
        const analyzeRequest = {
          comment: {
            text: "Fuck you",
          },
          requestedAttributes: {
            TOXICITY: {},
          },
        };

        client.comments.analyze(
          {
            key: API_KEY,
            resource: analyzeRequest,
          },
          (err, response) => {
            if (err) throw err;
            console.log(JSON.stringify(response.data, null, 2));
          }
        );
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
