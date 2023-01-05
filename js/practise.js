// function top(callback,d,f){
//     return callback(d,f)
// }

// function add(a,b){
//     console.log(a+b);
// }
// top(add,4,2)

// let arr=['jan','fab','march','apr','Dec']
// let myArr=()=>{
//     let index=arr.indexOf('dec')
//     if(index!==-1){
//          arr.splice(index,1,'dec')
//          console.log(arr);
//     }
//     else{
//        console.log('Data not found');
//     }
// }
// myArr();


// let arr=[1,2,3,4,5,6,8,9]
// for(i=arr.length-1;i>0;i--){
//     if(i>=6){
//         arr[i+1]=arr[i]
//         if(i==6){
//             arr[i]=7
//         }
//     }
// }
// console.log(arr);


// function isPrime(num){
//     let count=0
//     for(i=0;i<=num;i++){
//         if(num%i==0){
//             count++
//         }
//     }
//     if(count==2){
//         console.log('Prime No');
//     }
//     else{
//         console.log("Not a prime");
//     }
// }
// // isPrime(21)

// const num = 21;
// const primeEx = (num) => {
//     let res;
//     for (i = 2; i < num; i++) {
//         if (num % i == 0) {
//             res = "not a prime"
//             break
//         }
//         else {
//             res = 'Prime no'
//         }
//     }
//     console.log(res);

// }
// primeEx(num)


// let arr = [10, 11, 5, 50, 9]
// let newArr = arr.filter((value) => {
//     for (i = 2; i < value; i++) {
//         if (value % i === 0) {
//             return false
//         }
//     }
//     return value
// })
// console.log(newArr);


// let arr = [{ name: 'Shubham', id: 1 }, { name: 'Rohit', id: 2 }]
// function show() {
//     setTimeout(() => {
//         arr.forEach(value => {
//             console.log(`${value.name}:${value.id}`);
//         });
//     }, 1000)
// }

// function pushData(myData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(arr.push(myData))
//             reject('Code problem')
//         }, 2000)
//     })

// }

// pushData({ name: 'Dinesh', id: '3' }).then(() => {
//     show()
// })


// let str = 'He is son of god'
// let newStr = str.split(' ')
// let rev = newStr.reverse()
// console.log(rev);

// let revStr = ''
// for (let val of newStr) {
//     revStr = revStr + val.split('').reverse().join('')
// }
// revStr = revStr.slice(0, 1).toUpperCase() + revStr.slice(1, revStr.length - 1) + revStr.slice(revStr.length - 1).toLowerCase();

// let count = 0;
// let j = 0;
// let empty = ''
// for (let i of revStr) {
//     console.log(newStr[j].length);
//     if (count === newStr[j].length) {
//         empty = empty + " "
//         count = 0;
//         j++
//     }
//     empty = empty + i
//     count++
// }
// console.log(empty);

// let arr = [89, 12, 7, 85, 63, 44, 5]
// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr);

// let input = 'He is my son'
// function myFn(str) {
//     let arr = [3, 2, 5]
//     let newStr = str.split(' ')
//     let emp = ''
//     for (let key of newStr) {
//         emp = emp + key
//     }
//     let myStr = ''
//     let count = 0;
//     let j = 0;
//     for (let key of emp) {
//         if (count === arr[j]) {
//             myStr = myStr + ' '
//             count = 0
//             j++
//         }
//         myStr = myStr + key
//         count++

//     }
//     return myStr
// }
// console.log(myFn(input));

// let str = 'India will win worldcup'
// let newStr = str.split(' ')
// let arr = []
// for (let key of newStr) {
//     arr.push(key.length)
// }
// let rev = newStr.reverse()
// let empty = ''
// for (let key of rev) {
//     let revStr = key.split('').reverse().join('')
//     empty = empty + revStr
// }
// empty = empty.slice(0, 1).toUpperCase() + empty.slice(1, -1) + empty.slice(-1).toLowerCase()
// let nEmpty = ''
// let count = 0;
// let j = 0;
// for (let key of empty) {
//     if (count === arr[j]) {
//         nEmpty = nEmpty + ' '
//         count = 0;
//         j++
//     }
//     nEmpty = nEmpty + key
//     count++
// }
// console.log(nEmpty);
// console.log(arr);

// let arr = [90, 4, 6, 70, 11, 9]
// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr);
// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = []
// for (i = 0; i < arr.length; i++) {
//     if (!arr3.includes(arr[i])) {
//         arr3.push(arr[i])
//     }
// }
// for (i = 0; i < arr2.length; i++) {
//     if (!arr3.includes(arr2[i])) {
//         arr3.push(arr2[i])
//     }
// }
// console.log(arr3);


// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let myArr = []

// for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr2.length; j++) {

//         if (i == j) {
//             myArr.push(arr[i] + arr2[j])
//         }
//     }
// }
// console.log(myArr);


// let arr = [1, 2, 3, 5, 6]
// arr.splice(3, 0, 4)
// console.log(arr);

// let arr = [1, 2, 3, 4, 4, 5, 6]
// arr.slice(4, 5)
// console.log(arr.slice(4, 5));

// let str = 'He is son of bitch'
// let newArr = str.split(' ')
// let arr = []
// for (let key of newArr) {
//     arr.push(key.length)
// }
// let rev = newArr.reverse()
// let nStr = ''
// for (let key of rev) {
//     nStr = nStr + key.split('').reverse().join('')
// }
// nStr = nStr.slice(0, 1).toUpperCase() + nStr.slice(1, -1) + nStr.slice(-1).toLowerCase();

// let count = 0;
// let j = 0;
// let myStr = ''
// for (let key of nStr) {
//     if (count == arr[j]) {
//         myStr = myStr + " "
//         count = 0
//         j++
//     }
//     myStr = myStr + key
//     count++
// }
// console.log(myStr);




// let arr = [1, 2, 3, 'g', 4, 5]
// for (i = 0; i < arr.length; i++) {
//     if (Number.isInteger(arr[i]) === false) {
//         console.log(arr.indexOf(arr[i]));
//     }
// }


// let arr = [1, 2, 3, 4]
// let newArr = arr.filter((val) => {
//     if (arr.includes(1)) {
//         return true
//     }
// })

// console.log(newArr);

// function top(a, b, callback) {
//     return callback(a, b)
// }
// function add(a, b) {
//     console.log(a + b);
// }
// top(4, 6, add)

// let arr = [2, 5, 2, 3, 1, 2, 3, 1, 1, 1]
// let str = 'javascript is open source'

// let newStr = str.split(' ')
// let comnination = newStr.reduce((acc, curr) => {
//     return acc + curr
// })

// let count = 0;
// let j = 0;
// let mystr = ''
// for (i = 0; i < comnination.length; i++) {
//     if (count === arr[j]) {
//         mystr = mystr + ' '
//         count = 0
//         j++
//     }
//     mystr = mystr + comnination[i]
//     count++

// };
// console.log(mystr);


// let str = 'javascript is open source'
// let newStr = str.split(' ')
// let arr = []

// for (let key of newStr) {
//     arr.push(key.length)
// }
// let revStr = newStr.reverse()
// let com = ''
// for (let key of revStr) {
//     let revAll = key.split('').reverse().join('')
//     com = com + revAll
// }
// let upp = com.slice(0, 1).toUpperCase() + com.slice(1, -1) + com.slice(-1).toLowerCase()


// let newW = ""
// let count = 0;
// let j = 0
// for (let key of upp) {
//     if (count === arr[j]) {
//         newW = newW + ' '
//         count = 0;
//         j++
//     }
//     newW = newW + key
//     count++
// }
// console.log(newW);



// let str = 'He is don of bitch'
// let newStr = str.replace('bitch', 'God')
// console.log(newStr);


// let arr = [10, 25, 30]
// function addData() {
//     setTimeout(() => {
//         arr.push(2)
//         console.log(arr);
//     }, 2000)
// }
// addData()
// console.log(arr);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(0);
// console.log(part);

// let str = 'he is one and eat one'
// let hitStr = 'one'
// let Arr = str.split(' ')
// for (i = 0; i < Arr.length; i++) {
//     if (Arr[i] == hitStr) {
//         Arr[i] = 'and'
//     }
// }
// console.log(Arr.join(' '));

// const multiply = (a, b) => {
//     return (a + b)
// }

// const multByTwo = multiply(4, 1)
// console.log(multByTwo);

// const multByThree = multiply(7, 8)
// console.log(multByThree);

// const path = require('path')
// const myPath = __dirname
// console.log(myPath);