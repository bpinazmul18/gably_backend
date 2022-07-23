const express = require("express");
const home = require("../routes/home");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");
const cookieParser = require("cookie-parser");
const config = require("config");

module.exports = function (app) {
  //middleware
  app.set("view engine", "pug");
  app.set("views", "./views");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  console.log(config.get("cookiePrivateKey"));
  app.use(cookieParser(config.get("cookiePrivateKey")));

  //routes
  app.use("/", home);
  app.use("/api/users", users);
  app.use("/api/auth", auth);

  //error
  app.use(error);
};
