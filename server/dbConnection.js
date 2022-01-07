const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectId
const db = {}

const url = process.env.DB_URL
const dbName = process.env.DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

db.connect = async () => {
  await client.connect((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Connected to DB succesfully!')
    }
  })
}

db.readAll = async (collection) => {
  db.connect()

  const items = await client.db(dbName).collection(collection)
    .find({}).toArray()

  db.disconnect()

  return (items)
}

db.readById = async (collection, id) => {
  db.connect()

  const item = await client.db(dbName).collection(collection)
    .find({ _id: ObjectId(id) }).toArray()

  db.disconnect()

  return (item)
}

// TODO: GetByName
// TODO: GetByCountry
// TODO: GetByCity
// TODO: GetByAuthor
// TODO: GetByType

db.create = async (collection, item) => {
  db.connect()

  const newItem = await client.db(dbName).collection(collection)
    .insertOne(item)

  db.disconnect()

  return (newItem)
}

// TODO: UpdateById

// TODO: DeleteById

db.disconnect = async () => {
  await client.close()
}

module.exports = db
