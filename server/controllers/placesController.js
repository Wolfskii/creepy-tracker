const db = require('../dbConnection')

const placesController = {}

placesController.create = async (req, res, next) => {
  const newItem = {
    name: req.body.name,
    country: req.body.country
  }

  try {
    await db.connect()
    await db.create('places', newItem)
    await db.disconnect()

    res.status(200).json(newItem)
  } catch (error) {
    res.status(401)
  }
}

placesController.readAll = async (req, res, next) => {
  try {
    await db.connect()
    const items = await db.readAll('places')
    await db.disconnect()

    res.status(200).json(items)
  } catch (error) {
    res.status(401)
  }
}

placesController.readById = async (req, res, next) => {
  const id = req.params.id

  try {
    await db.connect()
    const item = await db.readById('places', id)
    await db.disconnect()

    res.status(200).json(item)
  } catch (error) {
    res.status(401)
  }
}

module.exports = placesController
