const path = require("path");
const express = require("express");
const colors = require("colors");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, (_) => {
  console.log(`Api server listening on PORT: ${PORT}`.green.underline);
});
