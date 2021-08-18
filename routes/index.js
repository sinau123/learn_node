const express = require("express");
const user = require("./user");

const router = express.Router();

router.use("/users", user);

router.get("/", (req, res, next) => {
  res.send("<h1>Hallo from Server</h1>");
});

module.exports = router;
