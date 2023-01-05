// let arr = [1, 2, [3, 4, 5, [6, [4, 8, [5, 9]], 7, 8]]]
// function myData(data) {
//     let flatArr = []
//     let sum = 0
//     for (i = 0; i < data.length; i++) {
//         if (Array.isArray(data[i])) {
//             flatArr = flatArr.concat(myData(data[i]))
//         }
//         else {
//             flatArr.push(data[i])

//         }
//     }
//     flatArr.forEach((val) => {
//         sum = sum + val
//     })
//     return sum
// }
// console.log(myData(arr));




let sum = 0
function add(arr) {
    for (let i of arr) {
        if (Array.isArray(i)) {
            add(i)
        }
        else {
            sum = sum + i
        }
    }
    return sum
}
const arr = [1, 2, 3, [4, 5,], [6], [7, 8, [9]]];
console.log(add(arr));