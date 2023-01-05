const connection = require('./config')
const insertData = async () => {
    const db = await connection()

    //Insert single data
    // const data = await db.insertOne({ name: 'Nihal', age: 22 })


    //Insert multiple data
    const data = await db.insertMany(
        [
            { name: 'Shubham Dhiman', age: 21 },
            { name: 'Manoj Kumar', age: 29 },
            { name: 'Ram Yadav', age: 24 },
            { name: 'Madan Mohan', age: 19 }
        ])
    if (data.acknowledged) {
        console.log("Data Inserted");
    }
}
insertData()