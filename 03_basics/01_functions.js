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

console.log(loginUserMessage("Dipendra"));
