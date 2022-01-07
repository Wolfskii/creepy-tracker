const db = require('../dbConnection')

const placesController = {}

placesController.readAll = async (req, res, next) => {
  try {
    const items = await db.readAll('places')

    res.status(200).json(items)
  } catch (error) {
    res.status(401)
  }
}

placesController.readById = async (req, res, next) => {
  const id = req.params.id

  try {
    const item = await db.readById('places', id)

    res.status(200).json(item)
  } catch (error) {
    res.status(401)
  }
}

placesController.create = async (req, res, next) => {
  const newItem = {
    name: req.body.name,
    country: req.body.country
  }

  try {
    await db.create('places', newItem)

    res.status(200).json(newItem)
  } catch (error) {
    res.status(401)
  }
}

module.exports = placesController
