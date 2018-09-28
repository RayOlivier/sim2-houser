require("dotenv").config()

const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  port = 3001

app.use(json())

app.listen(port, () => console.log(`Sim 2 listening on ${port}`))
