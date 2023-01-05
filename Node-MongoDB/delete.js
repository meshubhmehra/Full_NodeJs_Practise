const connection = require('./config')

const deleteData = async () => {
    const db = await connection()
    const remove = await db.deleteOne({ name: "Gorav" })
    if (remove.acknowledged === true) {
        console.log('Data Deleted');
    }
}
deleteData()