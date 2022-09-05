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
  app.use(express.static(path.join(__dirname, "./client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Please set to production."));
}

app.listen(PORT, (_) => {
  console.log(`Api server listening on PORT: ${PORT}`.green.underline);
});
