var mongoose = require('mongoose')
var Restaurant = require('../models/restaurantModel')

exports.getAllRestaurant = (req, res) => {
  Restaurant.find({}, (err, doc) => {
    res.send(doc)
  })
}

exports.getRandomRestaurant = (req, res) => {
  var tags = []
  if (req.query.tags) {
    tags = req.query.tags.split(",")

    Restaurant.find({"tags": {'$all': tags}}, (err, doc) => {
      const rndIndex = Math.floor((Math.random() * doc.length))
      res.send(doc[rndIndex])
    })
  } else {
    Restaurant.find({}, (err, doc) => {
      const rndIndex = Math.floor((Math.random() * doc.length))
      console.log(rndIndex)
      res.send(doc[rndIndex])
    })
  }
}

exports.createRestaurant = (req, res) => {
  var name = req.body.name
  var address = req.body.address
  var tags = req.body.tags.split(",")

  var restaurant = new Restaurant({
    name,
    address,
    tags
  })
  
  restaurant.save((err, doc) => {
    res.send(doc)
  })
}

exports.getTags = (req, res) => {
  var tags = []

  Restaurant.find({}, (err, doc) => {
    for (var i = 0; i < doc.length; i ++) {
      for (var j = 0; j < doc[i].tags.length; j ++) {
        if (tags.indexOf(doc[i].tags[j]) == -1) {
          tags.push(doc[i].tags[j])
        }
      }
    }

    res.send(tags)
    console.log(tags)
    
  })
}