 const myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6) // Put a value at last
// myArr.pop() // remove last element
// myArr.unshift(9) // Add element in start

//  console.log(myArr.includes(9)); // Check if exist 
//  console.log(myArr.indexOf(4)); // Check index of element

const newArr = myArr.join() // Change into string

const myNew2 = myArr.slice(1, 3) // trim array inlude index 1 to 2, not include 3, do not chamge original, left as it is
const myNew3 = myArr.splice(1, 3) // trim array include index 1 to 3 and change original array left other only [0, 4, 5]
console.log(myNew2);
console.log(myNew3);
 