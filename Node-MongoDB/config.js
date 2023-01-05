const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const connection = async () => {
    const con = await client.connect()
    const db = con.db('school')
    return db.collection('student')
}

module.exports = connection