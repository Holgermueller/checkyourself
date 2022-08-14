const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/perspective", require("./routes"));

app.listen(PORT, (_) => {
  console.log(`Api server listening on PORT: ${PORT}`.green.underline);
});
