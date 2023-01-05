// let obj = {
//     name: 'Shubham',
//     age: 25,
//     fullname: function () {
//         console.log(`My Name is ${this.name},${this.age} year old`);
//     }
// }
// obj.fullname()

// obj2 = {
//     name: 'Dinesh',
//     age: 10
// }
// obj3 = {
//     name: 'Deepak',
//     age: 40
// }

// obj.fullname.call(obj2)
// obj.fullname.call(obj3)



// const obj = {
//     name: 'shubham',
//     fullname: function (age, city) {
//         console.log(`my name is ${this.name},age is ${age},living in ${city}`);
//     }
// }

// obj2 = {
//     name: 'Jagan'
// }
// obj3 = {
//     name: 'Pradeep'
// }

// obj.fullname(15, 'pune')
// obj.fullname.call(obj2, 25, 'indore')
// obj.fullname.call(obj3, 20, 'bhopal')


// const obj = {
//     name: 'shubham',
//     fullname: function (age, city) {
//         console.log(`my name is ${this.name},age is ${age},living in ${city}`);
//     }
// }

// obj2 = {
//     name: 'Jagan'
// }
// obj3 = {
//     name: 'Pradeep'
// }

// obj.fullname(15, 'pune')
// obj.fullname.apply(obj2, [20, 'pune'])
// obj.fullname.apply(obj3, [10, 'delhi'])


// const obj = {
//     name: 'shubham',
//     fullname: function (age, city) {
//         console.log(`my name is ${this.name},age is ${age},living in ${city}`);
//     }
// }

// obj2 = {
//     name: 'Jagan'
// }

// const val = obj.fullname.bind(obj2, 25, 'Shivpuri')
// val()
