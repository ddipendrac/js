let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Object

// let myCreatedDate = new Date (2023, 0, 23)
// let myCreatedDateTwo = new Date (2023, 0, 23, 5, 3)
 let myCreatedDateTwo = new Date ("01-14-2023")
// console.log(myCreatedDateTwo.toLocaleString());

let myTimeStamp = Date.now()

// Used in room booking app to compare time
console.log(myTimeStamp); // Get current time in milisecond
console.log(myCreatedDateTwo.getTime()); // Get that time in milisecond
console.log(Math.floor(Date.now()/1000)); // Get time in seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1); // 1 added because it starts from 0
console.log(newDate.getDay() + 1);
