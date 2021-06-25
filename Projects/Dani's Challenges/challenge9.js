// CHALLENGE 9
//9) Write a function that takes a temperature in farenheit as a parameter and converts it to Celcius. C = (F - 32) * (5/9)
// things inside of () is considered a parameter 


function toCelcius(far) {
    var cel;
    cel = (far - 32) * 5 / 9;
    return cel;
}

console.log(toCelcius(69))

