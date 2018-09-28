module.exports = {
  getHouses(req, res) {
    let db = req.app.get("db")
    db.getHouses()
      .then((list) => {
        res.status(200).json(list)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  },
  postHouse(req, res) {
    let db = req.app.get("db")
    db.postHouse([
      req.body.name,
      req.body.address,
      req.body.city,
      req.body.state,
      req.body.zip,
      req.body.mortgage,
      req.body.rent,
      req.body.img
    ])
      .then((response) => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  },
  deleteHouse(req, res) {
    let db = req.app.get("db")
    db.deleteHouse([req.params.id])
      .then((stuff) => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json("Oops!")
      })
  }
}
