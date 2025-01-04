// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
    
})(); // End iife by ;

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Dipendra")
