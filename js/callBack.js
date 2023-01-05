// function second(){
//     console.log('Surfarosh hai');
// }
// function myFn(callback){
//     console.log('Aap ki Kashish');  
//     callback()
// }


// myFn(second)


// function top(callback, a, b) {
//     return callback(a, b)
// }
// function add(a, b) {
//     console.log(a + b);
// }
// function sub(a, b) {
//     console.log(a - b)
// }
// top(sub, 5, 20)



// CallBack Example
// function add(a, b) {
//     console.log(a + b);
// }

// function sub(a, b) {
//     console.log(a - b);
// }

// function calculation(callback) {
//     return callback(15, 7)
// }
// calculation(sub)


//Call Back Example 

function first(callback) {
    console.log('First');
    callback()

}
function second(callback) {
    setTimeout(() => {
        console.log('second');
        callback()
    }, 3000)
}
function third(callback) {
    setTimeout(() => {
        console.log('third');
        callback()
    }, 2000)
}

function forth() {
    setTimeout(() => {
        console.log('forth');
    }, 1000)
}
first(() => {
    second(() => {
        third(() => {
            forth()
        })
    })
})

