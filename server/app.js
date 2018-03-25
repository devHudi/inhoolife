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
    text = text + "추가 문의는 <a href='https://www.facebook.com/인후라이프-1930922233794951'> 인후라이프 페이스북</a> 으로 부탁드립니다.<br>"
    text = text + "총 " + doc.length + "개의 식당이 등록되어 있습니다. 실시간으로 추가중입니다.<br><br>"

    doc.map((restaurant) => {
      text = text + restaurant.name + "<br>"
    })

    res.send(text)
  })
})

app.listen(3002, () => {
  console.log("인후 룰렛 서버가 실행되었습니다.")
})