// let num=123;
// let newNum=num.toString()
// console.log(newNum);

// let myNum=(123).toString()
// console.log(myNum);

// let num1=5;
// let num2=6;
// // let num3=num1.toString()+num2.toString()
// let num3=num1.toString()*num2.toString()
// console.log(num3);

// let arr=[1,2,3,4,1,3,5,1,5,5,4];
// let newArr=[]
// arr.forEach((val)=>{
//     if(!newArr.includes(val)){
//         newArr.push(val)
//     }
// })
// console.log(newArr);


// let arr=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[];
// for(i=0;i<arr.length;i++){
//     arr3[i]=arr[i]
//     for(j=0;j<arr2.length;j++){
//         arr3[arr.length+j]=arr2[j]
//     }
// }
// console.log(arr3);

// let arr=[1,2,3,4,5]
// let sum=0
// for(i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum);


// let arr=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[]
// for(i=0;i<arr.length;i++){
//     arr3[i]=arr[i]
//     for(j=0;j<arr2.length;j++){
//         arr3[arr.length+j]=arr2[j]
//     }
// }


// console.log(arr3);



// let arr=[10,5,25,33,22];
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr);


// let arr=[1,2,3,3,4,5]
// let pos=2;
// for(i=0;i<arr.length-1;i++){
//     if(i>=pos){
//         arr[i]=arr[i+1]
//     }
// }
// arr.length=arr.length-1
// console.log(arr);


// let arr1=[5,1,3,5,8]
// let arr2=[1,0,8,9,52]
// let arr3=[5,5,5,7,8,8]
// let arr4=[10,55,22,77]
// let arr5=[82,74,96,14]
// let all=arr1.concat(arr2,arr3,arr4,arr5)
// console.log(all);



// let arr=['abc','efg','xyz','pqr','rst','uvw']
// let newArr=arr.splice(2,3,'mohan','soja')
// console.log(newArr);
// console.log(arr);

// let arr=[1,2,3,4,5]
// arr.splice(2,2,5)
// console.log(arr);

// let arr=['aam','jam','kela']
// let newArr=arr.slice(1)
// console.log(arr);
// console.log(newArr);

// let arr=[1,2,3,4,5,6,7,8]
// let newArr=arr.slice(3,1)
// console.log(newArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);


// let arr=[1,2,3,1,2,3,4,5,6,1,2,3]
// let newArr=arr.filter((val,index)=>{
//     return arr.indexOf(val)===index

// })

// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6, 7]
// let fil = arr.filter((val, index) => {
//    return false
   
// })
// console.log(fil);

// function myFn(a=4,b=4){
//   console.log(a+b);
// }
// myFn(6,7)

let arr=[10,2,3,40,50,11,22,44]
let max=0, smax=0;
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        smax = max;
        max=arr[i];
    }
    else if(arr[i]>smax){
        smax = arr[i];
    }
}
console.log(max, smax);
// console.log('kjh');


// let arr=[4,10,50,3,9,65]
// let smax=0;
// let max=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         smax=max
//         max=arr[i]
    
//     }else if(arr[i]>smax){
//         smax=arr[i]
//     }
// }
// console.log(max,smax);

// let arr=[5,3]
// let max=0;smax=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         smax=max;
//         max=arr[i]
//     }
//     else if(arr[i]>smax){
//         smax=arr[i]
//     }
// }
// console.log(max,smax);
