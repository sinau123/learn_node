const express = require("express");

const app = express();
app.use(({ require, res, next }) => {
  console.log("this is middleware");
  next();
});
app.use("/users", ({ require, res, next }) => {
  res.send("<h1>Users Page</h1>");
});
app.use("/", ({ require, res, next }) => {
  res.send("<h1>Hallo from Server</h1>");
});

app.listen(8000);
