const userEmail = "dipendra@d.ai"
// Checking if there is value is truthy
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");  
}

// falsy values
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}, 

// CHECK IF ARRAY IS EMPTY

// const emptyArr = []
// if (emptyArr.length === 0) {
//     console.log("Array is empty");
// }

// CHECK IF OBJECT IS EMPTY
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10 // If val is null then assign another
val3 = undefined ?? 15 // If val is undefined then assign another
val4 = null ?? 10 ?? 10

// console.log(val1);
// console.log(val2);
// console.log(val3);

// Ternary Operator

// condtion ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;
