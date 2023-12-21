const express = require("express");
const contactRouter = require("./api/routes/contact");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// app.use((req, res, next) => {
//   console.log("this is middleWare");
//   next(); // next call korle next code gula run korbe
// });

app.use("/api/contacts", contactRouter);

app.get("/", (req, res) => {
  res.send("<h1>This is my Post page</h1>");
});

app.listen(PORT, () => {
  console.log(`App is open ${PORT}`);
});

// const user = [
//   {
//     name: "name1",
//     email: "email1@gmail.com",
//   },
//   {
//     name: "name2",
//     email: "email1@gmail.com",
//   },
//   {
//     name: "name3",
//     email: "email1@gmail.com",
//   },
//   {
//     name: "name4",
//     email: "email1@gmail.com",
//   },
// ];
