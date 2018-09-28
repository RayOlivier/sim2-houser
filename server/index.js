require("dotenv").config()

const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  port = 3001,
  massive = require("massive"),
  controller = require("./controller")

app.use(json())

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
  app.set("db", dbInstance)
})

app.get("/api/houses", controller.getHouses)

app.post("/api/house", controller.postHouse)
app.delete("/api/house/:id", controller.deleteHouse)

app.listen(port, () => console.log(`Sim 2 listening on ${port}`))
