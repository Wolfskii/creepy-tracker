const Place = require('../models/Place')

const placesController = {}

placesController.readAll = async (req, res, next) => {
  try {
    const items = await Place.find() // .limit() for a limit of gotten
    res.json({
      places: items,
      links: {
        self: { href: '', method: 'GET, POST', desc: 'GET all registered places or POST to create a new place if logged in', params: 'POST: { {name}, {description}, {imgUrl}, {longitude}, {latitude}, {type} }', authToken: '{token}' },
        getOnePlace: { href: '/:id', method: 'GET', desc: 'Get a specific place from id', params: '{id}' },
        editPlace: { href: '/:id', method: 'PUT', desc: 'Change a place if logged in and is yours', params: '{id}, {name}, {description}, {imgUrl}, {longitude}, {latitude}, {type} }', authToken: '{token}' },
        deletePlace: { href: '/:id', method: 'DELETE', desc: 'Delete a place by its id if logged in and is yours', params: '{id}', authToken: '{token}' }
      }
    })
  } catch (err) {
    res.json({ message: err })
  }
}

placesController.readById = async (req, res, next) => {
  try {
    const item = await Place.findOne({ _id: req.params.id })
    res.json(item)
  } catch (err) {
    res.json({ message: err })
  }
}

placesController.create = async (req, res, next) => {
  const item = new Place({
    name: req.body.name,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    type: req.body.type,
    authorId: req.body.authorId, // TODO: To take from user-token when logged in later
    links: {}
  })

  try {
    item.links = {
      self: `/api/places/${item._id}`
      /* user: `/api/places/${item.authorId}` TODO: add endpoint for all authors */
    }
    const savedItem = await item.save()
    delete savedItem.links
    res.status(201).json(savedItem)
  } catch (err) {
    res.json({ message: err })
  }
}

placesController.updateById = async (req, res, next) => {
  try {
    // TODO: Implement checking if current user is the owner of the item, otherwise deny update, and if item exists

    await Place.updateOne({ _id: req.params.id }, {
      $set: {
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        type: req.body.type
      }
    })

    const updatedItem = await Place.findOne({ _id: req.params.id })
    delete updatedItem.links
    res.json(updatedItem)
  } catch (err) {
    res.json({ message: err })
  }
}

placesController.deleteById = async (req, res, next) => {
  try {
    const searchedItem = await Place.findOne({ _id: req.params.id })

    // TODO: Implement checking if current user is the owner of the item, otherwise deny update, and if item exists

    await Place.deleteOne({ _id: req.params.id })
    delete searchedItem.links
    res.json({
      message: 'Succesfully removed!',
      removed: searchedItem
    })
  } catch (err) {
    res.json({ message: err })
  }
}

module.exports = placesController
