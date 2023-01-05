// let num=11;
// let count=0;
// let res;
// for(i=1;i<=num;i++){
//     if(num%i==0){
//         count++
//     }
//     if(count==2){
//         res="Prime No"
//     }
//     else{
//         res="Not A Prime No"
//     }
// }
// console.log(res);


let arr = [1, 2, 3, 'f', 5, 6];
let pos = 3
for (i = 0; i < arr.length; i++) {
    if (i == pos) {

        arr[i] = 4
    }
}
console.log(arr);

// let arr=[1,2,3,5,6]
// let pos=3
// for(i=arr.length;i>=pos;i--){
//     if(i>=pos){
//         arr[i+1]=arr[i]
//         if(i==pos){
//             arr[i]=4
//         }
//     }
// }
// arr.length=arr.length-1
// console.log(arr);


// let str='name';
// // let newS=str.slice(0,4)
// let len=str.length
// console.log(len);


// let str='my name is ram'
// let newStr=str.slice(0,1)
// console.log(newStr);

// let str='Aam,jam,kela'
// let newStr=str.slice(3,4)
// console.log(newStr);


// let str='like and like';
// let newStr=str.replace(/like/g,'share')
// console.log(newStr);

// function myFn(arg){
//     if(arg.length===0){
//         console.log('String is blank');
//     }
//     else{
//         console.log(arg);
//     }
// }
// myFn('Ram')


// let str='Hello this is shubham mehra'
// let newStr=str.split(' ')
// console.log(newStr);






//Question====> the first string should be bigger if not return -1
//Question ====>check if second the string is present in first string if present print count how many time it present 
// function myFn(arg1, arg2) {

//     if (arg1.length > arg2.length) {
//         let count = 0
//         let extract = arg1.split(' ')
//         for (i = 0; i < extract.length; i++) {
//             if (extract[i] == arg2) {
//                 count++
//             }
//         }
//         console.log(count);
//     }
//     else {
//         return -1
//     }
// }

// let str = myFn('this is where is i left', 'is')



// function myFn(fn){
// let fn1=fn.slice(6,11)
// console.log(fn1);
// }
// myFn('Robin Sharma')



// let str='my name is vinod'
// let newStr=str.split(' ');
// for(i=0;i<newStr.length;i++){
//     if(newStr[i].length==2){
//         console.log(newStr[i].toUpperCase());
//     }
// }


// let str='abbsssdd'
// for(i=0;i<str.length;i++){
//     console.log(str[i]);
// }


// let str='my love india'
// let newStr=str.charAt(5)
// console.log(newStr);


// let str='my love is india evm eno'
// let newS=str.lastIndexOf('e')
// console.log(newS);

// let str='Hey what are doing where are those'
// let newStr=str.match(/re/g)
// console.log(newStr);


// let str='mms mkmlsm'
// let newStr=str.startsWith('mm')
// console.log(newStr);


// let str='abbssgg';
// let obj={};
// for(i=0;i<str.length;i++){
//     let key=str[i];
//     if(!obj[key]){
//         obj[key]=0
//     }
//     obj[key]++
// }
// console.log(obj);

let str = 'haxaaxxx';
let obj = {};
for (i = 0; i < str.length; i++) {
    if (!obj[key = str[i]]) {
        obj[key] = 0
    }
    obj[key]++
}



// function removeDuplicateCharacters(string) {
//     return string
//       .split('')
//       .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//       })
//       .join('');
//   }
//   console.log(removeDuplicateCharacters('baraban'));

// let arr=[1,2,3,4,1,3,5,1,5,5,4];
// let newArr=[]
// arr.forEach((val)=>{
//     if(!newArr.includes(val)){
//         newArr.push(val)
//     }
// })
// console.log(newArr);