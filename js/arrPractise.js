let str = 'I am shubham';
let newStr = str.split(' ')
let arr = []
for (let key of newStr) {
    arr.push(key.length)
}
let rev = newStr.reverse()

let emp = ''
for (let val of newStr) {
    let myStr = val.split('').reverse().join('');
    emp = emp + myStr
}
emp = emp.slice(0, 1).toUpperCase() + emp.slice(1, emp.length - 1) + emp.slice(emp.length - 1).toLowerCase();

let count = 0;
let j = 0
let str1 = ''
for (let key of emp) {
    if (count === arr[j]) {
        str1 = str1 + ' ';
        count = 0
        j++
    }
    str1 = str1 + key
    count++
}
console.log(str1);