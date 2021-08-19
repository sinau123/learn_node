const express = require("express");
const user = require("./user");
const product = require("./product");

const router = express.Router();

router.use("/users", user);
router.use("/products", product);

router.get("/", (req, res, next) => {
  res.send("<h1>Hallo from Server</h1>");
});

module.exports = router;
