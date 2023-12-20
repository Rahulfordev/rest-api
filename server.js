const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is home page</h1>");
});

app.get("/post", (req, res) => {
  res.send("<h1>This is my Post page</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is open ${PORT}`);
});
