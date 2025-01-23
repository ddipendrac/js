// let myName = "dipendra   "

// console.log(myName.trulength);


let myHeros = ["thor", "spiderman"]

let heroPower =  {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);   
    }  
}

// function, array, string all are basically object
// here we create a hitesh prototype(property) in objet so it will be present in all object
Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all objects`);
    
}


Array.prototype.heyHitesh = function(){
    // console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
myHeros.heyHitesh()

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport // all properties comes from TeachingSupport
}

Teacher.__proto__ = User // Outdated

// Modern syntax for accessing properties
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()