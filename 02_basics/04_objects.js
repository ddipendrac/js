// const tinderUser = new Object() // Singleton object
const tinderUserTwo = {} // Non singeleton object

tinderUserTwo.id = "123h3h3h1"
tinderUserTwo.name = "Samy"
tinderUserTwo.isLoggedIn = false

// console.log(tinderUserTwo);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {        // Nesting object possible
            firstName: "dipendra",  
            lastName: "chaudhary"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}

// const obj4 = Object.assign(obj1, obj2, obj3) // Merge together
// const obj4 = Object.assign({}, obj1, obj2, obj3) // Here {} is target obj where all other source obj will be merged, otherwise all will go to obj1

const obj4 = {...obj1, ...obj2, ...obj3} // Merge using spread operator
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // access object element from array


// console.log(Object.keys(tinderUserTwo)); // get all keys of an object in array
// console.log(Object.values(tinderUserTwo)); // Get all values of an object in array
  
// console.log(tinderUserTwo.hasOwnProperty('isLoggedIn')); // Check if exist


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course // Destructuring the value 

console.log(instructor);

// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]