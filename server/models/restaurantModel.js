const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: String,
  tags: [String],
  address: String,
  alcohol: Boolean,
  date: { type: Date, default: Date.now}
})

module.exports = mongoose.model('restaurant', restaurantSchema)