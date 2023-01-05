// const currying = (length) => (breadth) => (height) => length * breadth * height

// console.log(currying(4)(5)(6));

function* generate() {
    console.log('First');
    yield 1,
        console.log('Second');
    yield 2
}
const genInstance = generate()
console.log(genInstance.next());
console.log(genInstance.next());
console.log(genInstance.next());