const express = require('express')
const router = express.Router()
const controller = require('../controllers/placesController')

router.get('/', controller.readAll)
router.get('/:id', controller.readById)
router.post('/', controller.create)

module.exports = router
