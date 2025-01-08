const myNums = [1, 2, 3]

// logic: initially accumulator takes 0, then adds with current value 1 and goes to accumulator 1, again adds to current value 2, and goes to accumulator 3, then adds to current value 3 and returns 6
// Used in cart to add total cost
// const myTotal = myNums.reduce(function(accumulator, current){
//     console.log(`acc: ${accumulator} and current value ${current}`);
    
//     return accumulator + current
// }, 0) // 0 is initial value

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Web dev course",
        price: 2999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const priceTwo = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceTwo);
