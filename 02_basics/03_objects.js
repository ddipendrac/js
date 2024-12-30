// Singleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dipendra",
    "full name": "Dipendra Chaudhary",
    age: 18,
    [mySym]: "myKey1", // in sqr bracket, it is symbol
    location: "Kailari",
    email: "dipendra@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); // To access by dot, better use []
// console.log(JsUser["email"]); // To access by [], use this because "full name" cant be accessed by dot
// console.log(JsUser[mySym]); // it seems key is a symbol but it is string

JsUser.email = "dipendra@chatgpt.com" // Change value
JsUser["email"] = "dipendra@chatgpt.com" // Change value

// Object.freeze(JsUser) // Lock the object: can't be changed

// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// Adding function in Object
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
