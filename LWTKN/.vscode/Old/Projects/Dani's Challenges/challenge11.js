
//CHALLENGE 10
//11) Write a function that takes an array of numbers as a parameter and returns the average of the numbers.


    // let numbers = [5, 7, 27, 31, 18, 4, 101];
    // let sum = numbers.reduce((a,b) => a + b, 0);
    // let avg =  sum / numbers.length;
    // console.log(avg)
   
    function average(numbers) {
        return numbers.reduce((a, b) => a + b) / numbers.length;
            }

            console.log(average([5, 7, 27, 31, 18, 4, 101]));

     
//Bonus: instead of taking an array, the function takes any amount of numbers.
// function arguments 


function averageBonus() {
    let sum = 0;
    for (let n = 0; n < arguments.length; n++){ 
        sum += arguments[n];// x += y is shorthand for x = x + y. //
    }
    return sum / arguments.length    
}
console.log(averageBonus(10, 20, 30));
