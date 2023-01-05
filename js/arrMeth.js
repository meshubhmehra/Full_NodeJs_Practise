//[1] indexOf()

//it moves forword and gives first match's index no. takes two arguments first is element and second is
// index value from we want to search if element is not present in array it returns -1 it is case sensitive

// let arr = [10, 20, 30, 4, 10, 30];
// let value = arr.indexOf(10);
// console.log(value);

// let value = arr.indexOf(10, 1);
// console.log(value);

//[2] lastIndexOf()

//it starts from last element and gives first match's index no. from last takes two arguments first is
// element and  second is index value from we want to search if element is not present in array it returns -1it is case sensitive

// let arr = [10, 20, 30, 4, 10, 30];
// let value = arr.lastIndexOf(10);
// console.log(value);

// let value = arr.lastIndexOf(10, 1);
// console.log(value);

//[3] includs()
//it search element in array that is present or not if present it return true if not present return false it takes
//two arguments first is element and second index no. from we want to search

// let arr = [10, 20, 3, 0, 96154];
// let newArr = arr.includes(10);
// console.log(newArr);

// let newArr = arr.includes(10, 2);
// console.log(newArr);

//[4]find()
//we can search conditionaly by find() it return only one value.niche wale example 20 se badi value return
//karna h to 20 se just badi value return kr deti h takes three argument first return value second return index no. and
//third return array which we are working on if condition is not fulfil return undefind

// let arr = [10, 20, 30, 40];
// let value = arr.find((value) => {
//   if (value < 5) {
//     return value;
//   }
// });
// console.log(value);

//[5]findIndex()
//we can search conditionaly by find() it return only one index number .niche wale example 20 se badi value ka index return
//karna h to 20 se just badi value ka index no return kr deti h if condition is not fulfil return -1

// let arr = [5, 4, 10, 20, 30, 40];
// let value = arr.findIndex((inde) => {
//     if (inde > 20) {
//         return inde;
//     }
// });
// console.log(value);

//[6]push() 
//=============add elements at the end of array
//=============push() return new length of array

//[7]unshift() 
//==============add elements at start of array
//==============unshift() return new length of array

//[8]pop()
//==============it remove last element of array
//==============it return removed element of array

//[9]shift()
//==============it remove first element of array
//==============it return removed element of array



//[10]splice()
//=====it add element in array at difined possition and remove element from difined possition
//(we can do crud by this metho)
//=====it takes three arguments first is index no. from where want to add element
//=====second is for how many element we want to delete
//=====third is which element we want to add 
//=====it return deleted element

//[ex 1]// let arr = [10, 20, 10, 20, 50, 60]
// let newArr = arr.splice(2, 2, 30, 40)
// console.log(arr);

//[ex 2]// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.splice(1, 1, 9)
// console.log(arr);


//[10]slice()
//======it slices out pice of array into new array
//======it takes two arguments
//================first is index no from where we want to slice
//===============second is also index no but it is last index to slice but cant add last index element
//======The slice() method creates a new array.
//=======The slice() method does not remove any elements from the source array.

// let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6]
// let newArr = arr.slice(3)
// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6, 7]
// let newArr = arr.slice(3, 6)
// console.log(newArr);