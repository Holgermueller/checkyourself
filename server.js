const path = require("path");
const express = require("express");
require("dotenv").config();
const colors = require("colors");
const { google } = require("googleapis");
const PORT = process.env.PORT || 8080;

const app = express();

API_KEY = process.env.API_KEY;
DISCOVERY_URL =
  "https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.listen(PORT, (_) => {
  console.log(`Api server listening on PORT: ${PORT}`.green.underline);
});
