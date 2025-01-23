function SetUserName (username){
    this.username = username
}

function createUser(username, email, password){
    // SetUserName(username) // it is only refence not call
    SetUserName.call(this, username) // To get value: this means I will use your this

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
