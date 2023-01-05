const moment = require('moment')
const date = moment('20/08/1996', 'dd/mm/yyyy')
const year = moment().diff(date, 'year')
console.log(year);