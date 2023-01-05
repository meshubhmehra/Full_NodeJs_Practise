const connection = require('./config')

const updataData = async () => {
    const db = await connection()
    const updat = await db.updateOne({ name: 'Shekhar' },
        { $set: { name: 'shubh', age: 31 } })
    if (updat.acknowledged === true) {
        console.log('Data Updated');
    }
}
updataData()