const express = require("express");
const router = express.Router();
const { google } = require("googleapis");

const API_KEY = process.env.API_KEY;
const DISCOVERY_URL = process.env.DISCOVERY_URL;

router.post("/", async (req, res) => {
  let messageToCheck = req.body.messageToCheck;

  if (!req.body.messageToCheck) {
    res.status(400);
    throw new Error("Please add something.");
  }

  google
    .discoverAPI(DISCOVERY_URL)
    .then((client) => {
      const analyzeRequest = {
        comment: {
          text: messageToCheck,
        },
        requestedAttributes: {
          TOXICITY: {},
          SEVERE_TOXICITY: {},
          IDENTITY_ATTACK: {},
          INSULT: {},
          PROFANITY: {},
          THREAT: {},
          SEXUALLY_EXPLICIT: {},
        },
      };

      client.comments.analyze(
        {
          key: API_KEY,
          resource: analyzeRequest,
        },
        (err, response) => {
          if (err) throw err;
          // let data = JSON.stringify(response.data, null, 2);
          res.status(200).json(response.data);
        }
      );
    })
    .catch((err) => {
      res.status(500).json({ err });
      throw err;
    });
});

module.exports = router;
