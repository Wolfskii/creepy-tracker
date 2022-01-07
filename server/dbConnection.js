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
  const items = await client.db(dbName).collection(collection)
    .find({}).toArray()

  return (items)
}

db.readById = async (collection, id) => {
  const item = await client.db(dbName).collection(collection)
    .find({ _id: ObjectId(id) }).toArray()

  return (item)
}

// TODO: GetByName
// TODO: GetByCountry
// TODO: GetByCity
// TODO: GetByAuthor
// TODO: GetByType

// TODO: Create
db.create = async (collection, item) => {
  const newItem = await client.db(dbName).collection(collection)
    .insertOne(item)

  console.log('Inserted document =>', newItem)

  return (newItem)
}

// TODO: UpdateById

// TODO: DeleteById

db.disconnect = async () => {
  await client.close()
}

module.exports = db
