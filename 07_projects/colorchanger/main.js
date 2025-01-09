const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(body);


buttons.forEach( function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id) {
            body.style.backgroundColor = e.target.id
        }
    })
})



