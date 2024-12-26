 const name = "dpendra"
 const repoCount = 5

// Concat but not recommended
//  console.log(name + repoCount + " Value" );

// Concat recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("dipendra-ch")
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("e"));

// const newString = gameName.substring(0, 4) // trim the string
// console.log(newString);

const anotherString = gameName.slice(-8, 4) // reverse the string
console.log(anotherString);

const newStringOne = "    Dipendra    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove start and end space


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", "-")) // replace %20 by -
