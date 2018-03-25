const express = require('express')
const router = express.Router()

const controller = require('../controllers/restaurantController')

const request = require('request')

router.get("/restaurants", controller.getAllRestaurant)
router.get("/restaurants/choice", controller.getRandomRestaurant)
router.get("/restaurants/tags", controller.getTags)

router.post("/restaurants", controller.createRestaurant)

router.get("/image/:q", (req, res) => {
  const client_id_list = ["nlYWfDLqkNqcF8SFm2J7", "MpqCm5ceV8DWqbixPYzV"]
  const client_secret_list = ["1IHOglves1", "MGIG6Ka364"]
  const rndIndex =  Math.floor(Math.random() * (client_id_list.length - 1))

  const client_id = client_id_list[rndIndex]
  const client_secret = client_secret_list[rndIndex]

  var api_url = 'https://openapi.naver.com/v1/search/image?query=' + encodeURI(decodeURI(req.params.q)) // json 결과
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    }
   request.get(options, function (error, response, body) {
    console.log(body)
     if (!error && response.statusCode == 200) {
       const data = JSON.parse(body);
       const imageList = data.items.map((item) => {
         return(item.thumbnail)  
       })
       res.send(imageList)
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   })
})

module.exports = router