const express = require("express");
const route = express.Router();

route.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello, I'm All contacts",
  });
});

route.post("/", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  console.log(name, email);

  res.status(201).json({
    message: "This is body parser res",
    name,
    email,
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
