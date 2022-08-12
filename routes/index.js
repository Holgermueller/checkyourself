const url = require("url");
const express = require("express");
const router = express.Router();

const API_KEY = process.env.API_KEY;
const DISCOVERY_URL = process.env.DISCOVERY_URL;

router.post("/", async (req, res) => {
  let messageToCheck = req.messageToCheck;

  google
    .discoverAPI(DISCOVERY_URL)
    .then((client) => {
      const analyzeRequest = {
        comment: {
          text: messageToCheck,
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
});

module.exports = router;
