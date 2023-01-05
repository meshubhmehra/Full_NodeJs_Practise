function sendRequest(greet) {
    return function (name) {
        return function (message) {
            return `${greet} ${name}, ${message}`
        }
    }
}
const data = sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')
console.log(data);