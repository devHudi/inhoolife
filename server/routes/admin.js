const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  var restaurants = [{
    "name": "킹콩순두부",
    "tag": ["찌개", "음식점"],
    "address": "인천광역시 남구 경인남길30번길 45-1"
  }]

  res.send(restaurants)
})

module.exports = router