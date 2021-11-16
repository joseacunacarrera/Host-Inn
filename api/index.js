const express = require("express");
const App = require("./app")

const app = new App().express

app.listen(3000, () => {
  console.log("app is running");
});
