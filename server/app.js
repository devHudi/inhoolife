const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

/* middleware */
app.use(bodyParser.urlencoded({extended: false}))

/* routes */
const api = require('./routes/api')
app.use("/api", api)

/* db connection */
const db = mongoose.connection
mongoose.connect("mongodb://localhost/inhoolife")

app.use(express.static('../client/build'))

app.get("/list", (req, res) => {
  var Restaurant = require('./models/restaurantModel')

  Restaurant.find({}, (err, doc) => {
    var text = "<meta charset='utf-8'>"

    doc.map((restaurant) => {
      text = text + restaurant.name + "<br>"
    })

    res.send(text)
  })
})

app.listen(3002, () => {
  console.log("인후 룰렛 서버가 실행되었습니다.")
})