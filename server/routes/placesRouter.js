const express = require('express')
const router = express.Router()
const controller = require('../controllers/placesController')

router.get('/', controller.getPlaces)

module.exports = router
