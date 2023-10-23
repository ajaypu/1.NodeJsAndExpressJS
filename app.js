// const http = require("http");

// const express = require("express");

// const app = express();

// const server = http.createServer(app);

// server.listen(4000);
import express from "express";
const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log("In the middleware");
  //   res.send();
  next(); // alows the request to containue to the next middleware in line
});
app.use((req, res, next) => {
  console.log("In another middleware");
  //   .....
  res.send("<h1>Hello from express</h1>");
});

app.listen(port, (req, res) => {
  console.log(`Running on port ${port}`);
});
