// function* simplegenerator() {
//     yield 1
//     yield 2
//     yield 3
// }

// const smInstance = simplegenerator()
// console.log(smInstance.next());
// console.log(smInstance.next());
// console.log(smInstance.next());
// console.log(smInstance.next());


// ================================================================================================================================================================================================================


// function* simplegenerator() {
//     console.log("Before yeild 1");
//     yield 1
//     console.log("after yeild 1");
//     console.log("Before yeild 2");
//     yield 2
//     console.log("after yeild 2");
//     console.log("Before yeild 3");
//     yield 3
// }

// const smInstance = simplegenerator()
// console.log(smInstance.next());
// console.log(smInstance.next());
// console.log(smInstance.next());
// console.log(smInstance.next());


// ================================================================================================================================================================================================================



// function* simplegenerator() {
//     let id = 1;
//     while (true) {
//         yield id
//         id++
//     }
// }

// const smInstance = simplegenerator()
// console.log(smInstance.next());
// console.log(smInstance.next());
// console.log(smInstance.next());


// ================================================================================================================================================================================================================



// function* simplegenerator() {
//     let id = 1;
//     while (true) {
//         const increment = yield id
//         if (increment != null) {
//             id = id + increment
//         }
//         else {
//             id++
//         }

//     }
// }

// const smInstance = simplegenerator()
// console.log(smInstance.next());
// console.log(smInstance.next(4));
// console.log(smInstance.next());
