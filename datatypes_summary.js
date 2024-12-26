// Data types are based on how they are stored in memory and how to access them(2 types)
// 1. Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null // null type, but typeof shows object
let userEmail; // undefined type

const id = Symbol('123') // unique value
const anotherId = Symbol('123') // another uniqe value
console.log(id === anotherId);

const bigNumber = 2938347478347783742n // bigInt type


// 2. Reference (Non-primitive)
// Array, Objects, Functions 

const heros = ["Shaktiman", "naagraj", "Doga"]
let myObj = {
    name: "Dipendra",
    age: 20
}

const myFunc = function(){
    console.log("Dipendra")
}

console.log(typeof myFunc);
