const moment = require('moment')

var years = moment().diff('1981-01-01', 'years', false);
console.log(years);
