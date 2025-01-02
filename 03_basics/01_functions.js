function sayMyName() {
    console.log("DIPENDRA");
}

// sayMyName() // Execute function


function addTwoNumbers(a, b) {
    return a + b
}

// console.log(addTwoNumbers(5, 3))

function loginUserMessage(username = "Sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Dipendra"));

// function calculateCartPrice(val1, val2, ...num1) {  // Here, first num goes to val1, sec goes to val2 then other to  ...rest operator
//     return num1
// }

function calculateCartPrice(...num1) {  // Here ... is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    userName: "Dipendra",
    email: "dipendra@google.com"
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.userName} and email is ${anyObject.email}`);
    
}

// handleObject(user)
handleObject({
    userName: "Sam",
    email: "sam@google.com"
})

const myArray = [200, 300, 400,100]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArray))