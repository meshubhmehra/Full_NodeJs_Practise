const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const connection = async () => {
    const result = await client.connect()
    const db = result.db('school');
    return db.collection('student')
}

module.exports = connection