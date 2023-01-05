let myStudents = [{ name: 'Dinesh', age: 25 }, { name: 'Mahesh', age: 12 }]
function showStudent() {
    myStudents.forEach((value) => {
        console.log(`He is ${value.name} and ${value.age} year old`);
    })
}

showStudent()