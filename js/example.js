// let num=5;
// let I=1;
// for(i=1;i<10;i++){
//     I=i*num
//     console.log(I);
// }

// let arr=[1,5,8,9,3]
// let newArr=arr.map((val)=>{
//     return val+5
// })
// console.log(newArr);

// let arr=[1,2,3,1,2,3,1,2,3,5]
// let newArr=arr.filter((val,ind)=>{
//     return arr.indexOf(val)===arr.lastIndexOf(val)
// })
// console.log(newArr);

// function top(first,a,b){
//     return first(a,b)
// }
// function add(a,b){
//     console.log(a+b);
// }
// function mult(a,b){
//     console.log(a*b);
// }
// top(mult,10,5)

// let obj=[
//     {name:'xyz',salary:45000},
//     {name:'abc',salary:35000},
//     {name:'pqr',salary:55000}
// ]
// let sor=obj.sort((a,b)=>{
//    if(a.name.toLowerCase()>b.name.toLowerCase() && a.salary>b.salary){
//     return 1
//    }
//    if(a.name.toLowerCase()<b.name.toLowerCase() && a.salary>b.salary){
//     return -1
//    }
//    return 0

// })
// console.log(obj);


// function top(first,a,b){
//     return first(a,b)
// }
// function add(a,b){
//     console.log(a+b);
// }
// top(add,5,1)


// let arr = [{ name: 'Vinod', age: 25 },
// { name: 'Nilesh', age: 34 },
// { name: 'Dinesh', age: 15 },
// { name: 'Mahesh', age: 21 },]

// let sortArr=arr.sort((a,b)=>{
//     return a.age-b.age
// })
// console.log(sortArr);


// function top(callback,a,b){
//    return callback(a,b) 
// }
// function add(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b)
// }
// top(sub,5,20)

// (function myName (a,b){
//     console.log(a+b);
// })(10,20) 
