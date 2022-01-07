const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

// For setting up env variables for .env-file
require('dotenv').config()

const port = process.env.PORT || 3000

app.use(cors())

// Establish connection to DB

// Bodyparser middleware for handling JSON.
app.use(bodyparser.json())

// Routes setup
app.use('/places', require('./routes/placesRouter'))

// Catch 404
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Page not found'
  })
})

// Cleaning out console output
console.clear()

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal Server Error')
})

if (process.env.NODE_ENV === 'test') {
  app.listen(port, () => {})
} else {
  app.listen(port, () => { console.log(`Server running on ${port}`) })
}

module.exports.app = app
