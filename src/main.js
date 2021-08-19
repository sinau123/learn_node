require("module-alias/register");
const express = require("express");
const path = require("path");
const routes = require("@/routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.use((req, res, next) => {
  res.status(404).send("<h1>Not Found</h1>");
});

app.listen(8000);
