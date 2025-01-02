// SCOPE
// {} bracket in func or in if else, or in loop is called scope
// The value declared inside that scope should be inside only
// Let and const are inside scope only but var can go out so var is not used
// Scope helps coder to make same variable name inside their scope code
// Suppose 1 coder uses variable name "myNum" in func and another also uses "myNum" in another func then no issue



if(true) {
    let a = 10 // can be accessed inside scope only
    const b = 20 // can be accessed inside scope only
    // var c = 30 // can be accessed outside scope
}

// console.log(a);
// console.log(b); 
// console.log(c);

function one(){
    const userName = "dipendra"

    function two() {
        const website = "youtube"
        console.log(userName);  // Can get value from one
    }
    // console.log(website); // Cant get value from two
    
    two()
}

// one()

if(true) {
    const userName = "hitesh"
    if (userName === "hitesh") {
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
    
}

// console.log(userName);

//++++++++++++++++Interesting++++++++++++

addone(5) // No issue
function addone(num) {
    return num + 1
}

// addTwo(6) // Issue because it is stored in variable
const addTwo = function(num) {
    return num + 2
}