const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/perspective", require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(static(path.join(__dirname, "client/dist")));
}

app.listen(PORT, (_) => {
  console.log(`Api server listening on PORT: ${PORT}`.green.underline);
});
