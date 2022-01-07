const { MongoClient } = require('mongodb')
let ObjectId = require('mongodb').ObjectId
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

db.getAll = async (collection) => {
  const items = await client.db(dbName).collection(collection)
    .find({}).toArray()

  return (items)
}

db.getById = async (collection, id) => {
  const item = await client.db(dbName).collection(collection)
    .find({ _id: ObjectId(id) }).toArray()

  return (item)
}

db.disconnect = async () => {
  await client.close()
}

module.exports = db
