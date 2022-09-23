const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const publicPath = path.join(__dirname, "public");

app.get("*", function (req, res) {
  res.sendFile("index.html", { root: publicPath });
});

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
