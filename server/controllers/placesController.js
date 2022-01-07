const db = require('../dbConnection')

const placesController = {}

placesController.getPlaces = async (req, res, next) => {
  try {
    await db.connect()
    const items = await db.getAll('places')
    await db.disconnect()

    res.status(200).json(items)
  } catch (error) {
    res.status(401)
  }
}

module.exports = placesController
