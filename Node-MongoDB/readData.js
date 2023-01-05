const connection = require('./config')

//first way of handle promise

// connection().then((resp) => {
//     return resp.find().toArray()
// }).then((res) => {
//     console.log(res);
// })


//second way of handle

const findData = async () => {
    const data = await connection();
    const finalData = await data.find().toArray()
    console.log(finalData);
}
findData()