const moment = require('moment')
const Utc = moment().utc()
console.log(Utc.toString());


//convert UTC to local time zone

const Local = Utc.local()
console.log(Local.toString());