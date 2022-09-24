const express = require("express");
const path = require("path");
const config = require("./config.js");

const app = express();
app.use(express.static(path.join(__dirname, "test")));
const publicPath = path.join(__dirname, "test");

var indexRouter = express.Router();
indexRouter.get("/*", function (req, res) {
  res.sendFile("index.html", { root: publicPath });
});

var fooRouter = express.Router();
fooRouter.get("/*", function (req, res) {
  res.send("Hello from foo");
});
indexRouter.use("/foo", fooRouter);

app.use(config.baseUrl, indexRouter);

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
