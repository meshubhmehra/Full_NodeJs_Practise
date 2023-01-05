let str = 'I am shubha mehra stish hargod     sss';
let arr = str.split(' ')
let obj = []
// for (let i of arr) {
//     obj.push(i.length)
// }
arr.forEach((val) => {
    obj.push(val.length)
})
arr.reverse()
let emp = ''
// for (let i of arr) {
//     let r = i.split('').reverse().join('')
//     emp = emp + r
// }
arr.forEach((val) => {
    let r = val.split('').reverse().join('')
    emp = emp + r
})
emp = emp.slice(0, 1).toUpperCase() + emp.slice(1, emp.length - 1) + emp.slice(-1).toLowerCase()

let count = 0
let j = 0
let neww = ''
for (let i of emp) {
    if (count === obj[j]) {
        neww = neww + ' ';
        count = 0
        j++
    }
    neww = neww + i
    count++
}
console.log(neww);