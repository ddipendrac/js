const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const heightInM = height / 100
    const weight = parseInt(document.querySelector("#weight").value)
    const btnCalculate = document.getElementById("btn-calculate")
    const results = document.querySelector("#results")

    if (heightInM === '' || heightInM < 0 || isNaN(heightInM)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if( weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else {
        const bmi = (weight / heightInM**2).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
    console.log(height);
    console.log(heightInM);    
})
