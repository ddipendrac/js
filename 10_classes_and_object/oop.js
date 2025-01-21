const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        // console.log("Got user details from database");
        // console.log(`${this.username}`);
        // console.log(this);    
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());

//#####=> this : means current context, this context
//#####=> new : constructor function, creates new context
//#####=> new : creates new empty object
// Creates a new object.
// Sets the prototype of the new object to the prototype of the constructor function.
// Binds this inside the constructor to the new object.
// Returns the new object, unless the constructor explicitly returns another object.

function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount =  loginCount,
    this.isLoggedIn = isLoggedIn;

    this.greet = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("Dipendra", 11, true)
// const userTwo = User("JavaScript", 12, false) // Overwrites userOne: all value in userOne are from userTwo
const userOne = new User("Dipendra", 11, true)
const userTwo = new User("JavaScript", 12, false) // Does not Overwrites userOne: all value in userOne are original

// console.log(userOne);
console.log(userOne.constructor);

