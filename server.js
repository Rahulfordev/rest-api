const express = require("express");
const contactRouter = require("./api/routes/contact");
const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/users", contactRouter);

app.get("/", (req, res) => {
  res.send("<h1>This is my Post page</h1>");
});

app.listen(PORT, () => {
  console.log(`App is open ${PORT}`);
});

const user = [
  {
    name: "name1",
    email: "email1@gmail.com",
  },
  {
    name: "name2",
    email: "email1@gmail.com",
  },
  {
    name: "name3",
    email: "email1@gmail.com",
  },
  {
    name: "name4",
    email: "email1@gmail.com",
  },
];
