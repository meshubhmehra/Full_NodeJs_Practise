const moment = require('moment')

const date1 = '12-06-2022 14:35'
const date2 = '12-06-2022 14:36'
const date3 = '10-06-2022 14:35'
const date4 = '12-6-2022 10:30'



//Here cheak date is same or not
// console.log(moment(date1).isSame(date2));
// console.log(moment(date1).isSame(date3));
// console.log(moment(date1).isSame(date4));

//here cheaking day is same or not
// console.log(moment(date1).isSame(date2, 'day'));
// console.log(moment(date1).isSame(date3, 'day'));
// console.log(moment(date1).isSame(date4, 'day'));

//here cheaking hour is same or not
//We can use isSame() with minutes and milisecond also
// console.log(moment(date1).isSame(date2, 'hour'));
// console.log(moment(date1).isSame(date3, 'hour'));
// console.log(moment(date1).isSame(date4, 'hour'));



//isBefore
//we can use with hour year and milisecond also

// console.log(moment(date1).isBefore(date2));
// console.log(moment(date1).isBefore(date3));


//isAfter

