const mongoose = require('mongoose')

const PlaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  datetime: {
    type: Date,
    required: true,
    unique: false,
    default: Date.now
  },
  imgUrl: {
    type: String,
    required: false,
    unique: false
  },
  longitude: {
    type: Number,
    required: true,
    unique: false,
    min: 1
  },
  latitude: {
    type: Number,
    required: true,
    unique: false,
    min: 1
  },
  type: {
    type: String,
    required: true,
    unique: false,
    maxlength: 200,
    minlength: 2
  },
  authorId: {
    type: String,
    required: true,
    unique: false
  }
})

module.exports = mongoose.model('Places', PlaceSchema)
