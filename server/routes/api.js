const express = require('express')
const router = express.Router()

const controller = require('../controllers/restaurantController')

router.get("/restaurants", controller.getAllRestaurant)
router.get("/restaurants/choice", controller.getRandomRestaurant)
router.get("/restaurants/tags", controller.getTags)

router.post("/restaurants", controller.createRestaurant)

module.exports = router