const marvalHeros = ["Thor", "Spiderman", "Ironman"]
const dcHeros = ["superman", "flash", "batman"]

// marvalHeros.push(dcHeros) // Adds array inside array

// console.log(marvalHeros);

// const allHeros = marvalHeros.concat(dcHeros) // Merge two arrow in one but in new var
// console.log(allHeros)

const allNewHeros = [...marvalHeros, ...dcHeros] // spread all element of 2 arrays in one
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]
const reealAnotherArray = anotherArray.flat(Infinity) // spread all arrays in one
console.log(reealAnotherArray);

// console.log(Array.isArray("Dipendra")); // Check is array or not
// console.log(Array.from("Dipendra")); // Convert anything to array
// console.log(Array.from({name: "dipendra"})); // Can not convert, to convert make certain what to convert key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // convert all in array
