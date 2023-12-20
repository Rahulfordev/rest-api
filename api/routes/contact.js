const express = require("express");
const route = express.Router();

route.post("/", (req, res, next) => {
  res.status(200).json({
    name: "sakib",
    email: "sakib@gmail.com",
    address: "magura",
  });
});

// route.get("/:id", (req, res, next) => {
//   const id = req.params.id;
//   res.json({
//     id,
//   });
// });

route.get("/:id", (req, res, next) => {
  res.json({
    message: "this is GET",
  });
});

route.put("/:id", (req, res, next) => {
  res.json({
    message: "this is PUT",
  });
});

route.delete("/:id", (req, res, next) => {
  res.json({
    message: "this is DELETE",
  });
});

module.exports = route;
