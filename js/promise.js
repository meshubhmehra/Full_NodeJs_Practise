// const emp_data = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const emp = [
//                 {
//                     name: "shubham",
//                     city: "bhopal",
//                     age: 25,
//                 },
//                 {
//                     name: "shreya",
//                     city: "indore",
//                     age: 22,
//                 },
//                 {
//                     name: "Rahul",
//                     city: "pune",
//                     age: 27,
//                 },
//                 {
//                     name: "shreya",
//                     city: "indore",
//                     age: 22,
//                 },
//             ];
//             resolve(emp);
//         }, 2000);
//     });
// };

// async function getData() {
//     const data = await emp_data();
//     console.log(data);
// }
// getData();

// let data=new Promise((res,rej)=>{
//   setTimeout(()=>{
//     {
//       let obj={name:'vinod',age:37,school:'svce'}
//       res (obj)
//     }
//   },3000)
// })

// data.then((resp)=>{
//   console.log(resp);
// })

// let data=new Promise((res,rej)=>{
//   setTimeout(()=>{
//     let obj={name:'Mohan',age:25}
//     res(obj)
//   },3000)
// }).then((result)=>{
//   console.log(result);
// })

// let data = [1, 2, 3, 4, 5];
// function myFn(myData) {
//   setTimeout(
//     (setData) => {
//       console.log(setData);
//     },
//     2000,
//     myData
//   );
// }
// myFn(data);

// let rollNo = [1, 2, 3, 4];

// function myFn(no) {
//   return new Promise((res, rej) => {
//     setTimeout(
//       (myRoll) => {
//         let obj = {
//           name: "vinod",
//           age: 25,
//           rollNo: myRoll[2],
//         };
//         res(obj);
//       },
//       2000,
//       no
//     );
//   });
// }

//////consume promise by then()//////

// myFn(rollNo).then((myData) => {
//   console.log(myData);
// });

//////consume promise by async await//////
// async function getData() {
//   let newData = await myFn(rollNo);
//   console.log(newData);
// }
// getData();




// let stuArr = [{ name: 'Vinod', course: 'C++' }, { name: 'Mohit', course: 'Java' }]

// function stuData() {
//     setTimeout(() => {
//         stuArr.forEach((value) => {
//             console.log(`he is ${value.name} studying ${value.course}`);
//         })
//     }, 1000)
// }

// function pushStu(stu) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(stuArr.push(stu))
//         }, 2000)
//     })
// }
// pushStu({ name: 'Chahal', course: 'Spring' }).then(stuData)






// const arr = [1, 2, 3, 4]

// function show() {
//     setTimeout(() => {
//         console.log(arr);
//     }, 1000)
// }
// function add() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(arr.push(5))
//         }, 2000)
//     })
// }

// add().then(show)


// function first() {
//     return new Promise((resolve, reject) => {
//         console.log('First');
//         resolve()
//     })
// }
// function second() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('second');
//             resolve()
//         }, 3000)

//     })
// }
// function third() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('third');
//             resolve()
//         }, 2000)
//     })
// }

// function forth() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('forth');
//             resolve()
//         }, 1000)
//     })
// }

// first().then(second).then(third).then(forth)



