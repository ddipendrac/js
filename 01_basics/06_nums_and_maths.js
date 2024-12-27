const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 2 digit after point

const otherNumber = 123.84947

// console.log(otherNumber.toPrecision(3)); // Gives presice num

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN")); // Put comma in Indian 


//+++++++ MATHS +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // -ve to +ve
// console.log(Math.round(4.3)); // round up
// console.log(Math.ceil(4.3)); // round up to upper
// console.log(Math.floor(4.3)); // round up to lower

console.log(Math.max(4, 3, 5, 6)); // Get max num
console.log(Math.random()); // Get random nums between 0 and 1
console.log((Math.random()*10) + 1 ); // Get random nums between 1 and 9

// Get random number between 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

