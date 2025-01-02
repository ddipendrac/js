const user = {
    userName: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.userName}, welcome to website`);
        // console.log(this); // Get current context
        
    }
}

// In browser, global object is window

user.welcomeMessage()
user.userName = "Same"
user.welcomeMessage()

// function chai() {
//     let userName = "Dipendra"
//     console.log(this);   
// }

// chai()

const chai = () => {

}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({userName: "Hitesh"}) // Use () parenthesis to return an object

// console.log(addTwo(2, 3));

const myArray = [2, 3, 4,7]
