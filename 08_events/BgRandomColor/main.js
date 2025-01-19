const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) { // run for 6 times
        color += hex[Math.floor(Math.random() * 16)] // get random digit from 0 to 16, which will be index of hex that value will be added to color for 6 times so a full color code will be passed onto color
    }
    return color; 
}

let intervalId;

const startChangingColor = function(){
    if(!intervalId) {
        intervalId = setInterval(changeBg, 1000)
    }
    
    function changeBg() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
 