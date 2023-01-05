let str = 'India will win worldcup'
let newStr = str.split(' ')
let arr = []
for (let key of newStr) {
    arr.push(key.length)
}
let rev = newStr.reverse()
let empty = ''
for (let key of rev) {
    let revStr = key.split('').reverse().join('')
    empty = empty + revStr
}
empty = empty.slice(0, 1).toUpperCase() + empty.slice(1, -1) + empty.slice(-1).toLowerCase()
let nEmpty = ''
let count = 0;
let j = 0;
for (let key of empty) {
    if (count === arr[j]) {
        nEmpty = nEmpty + ' '
        count = 0;
        j++
    }
    nEmpty = nEmpty + key
    count++
}
console.log(nEmpty);
console.log(arr);