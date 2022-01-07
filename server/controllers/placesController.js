const axios = require('axios')

const placesController = {}

placesController.getPlaces = async (req, res, next) => {
  /* const url = `${process.env.MAIN_URL}` */

  try {
    /*     const response = await axios.get('/')
    const jsonData = await response.json() */

    res.status(200).json('Test response')
  } catch (error) {
    res.status(401)
  }
}

module.exports = placesController
