const express = require("express");
const path = require("path");
const appDir = require("@/helpers/path");

const router = express.Router();

const products = [];

router.get("/add", (req, res, next) => {
  res.sendFile(path.join(appDir, "views", "add-product.html"));
});

router.post("/add", (req, res, next) => {
  const { title } = req.body;
  console.log(title);
  products.push({ title });
  res.redirect("/products/add");
});

module.exports = router;
