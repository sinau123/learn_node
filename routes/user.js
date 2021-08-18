const express = require("express");

const router = express.Router();

const names = [];

router.get("/", (req, res, next) => {
  res.send(
    "<h1>Users Page</h1><ol>" +
      names.map((name) => `<li>${name}</li>`).join("") +
      "</ol>"
  );
});

router.post("/", (req, res, next) => {
  const { name } = req.body;
  names.push(name);
  res.redirect("/users");
});

router.get("/create", (req, res, next) => {
  res.send(`<form action="/users" method="POST"><input name="name" /></form>`);
});

module.exports = router;
