const express = require('express')
const router = express.Router()
const controller = require('../controllers/placesController')

router.get('/', controller.getPlaces)
router.get('/:id', controller.getPlaceById)

module.exports = router
