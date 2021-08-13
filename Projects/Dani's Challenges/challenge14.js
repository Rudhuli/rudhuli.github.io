//14) Write a function that takes an array of numbers as a parameter and returns the number with the highest value. You may not use the Math library for this problem.

// function findMax([numbers]) {}


// HOW TO USING Math.max
// { let numbers = [5, 7, 27, 31, 18, 4, 101];
// console.log(Math.max(...numbers)) // why use (...numbers) instead of (numbers) tho? //spread syntax
// }

// { let numbers = [5, 7, 27, 31, 18, 4, 101];
// let max = numbers.reduce(function(a, b) {   //array.reduce() // The apply() method calls a function with a given this value, and arguments provided as an array
// return Math.max(a, b);
// });
// console.log(max)


/////////////////////////////// USING FOR LOOP///////////////////////////////////////////////

 {let numbers = [5, 7, 27, 31, 18, 4, 101]
 let maxNum = 0; 
 for (let x = 1; x <numbers.length; x++){
     if (numbers[x] > maxNum) maxNum = numbers[x];
 }
console.log(maxNum)}

function findMaxLoop(numbers) {
    let maxNum = numbers[0];

    for (let x = 1; x < numbers.length; x++) {
        if (numbers[x] > maxNum) maxNum = numbers[x];
    }

    return maxNum;
}

console.log(findMaxLoop([42, 34, 8, 13, -9, 101]));

/////////////////////////////// USING REDUCE/////////////////////////////////////////

// { let numbers = [5, 7, 27, 31, 18, 4, 101]
// let maxNum = numbers.reduce(function(x,y){
//     return (x > y) ? x : y ;
// });

// console.log(maxNum) 
// } 

function findMax(numbers){
    return numbers.reduce ((x, y) => x > y ? x : y)
}
console.log(findMax([5, 7, 27, 31, 18, 4, 101]))

///////////////////////// USING SORT////////////////////////////////////////////////

let numbers = [5, 7, 27, 31, 18, 4, 101]
maxNum = numbers.sort((a, b) => a - b)[numbers.length - 1];
console.log(maxNum)

function findMaxSort(numbers){
    return maxNum = numbers.sort((a, b) => a - b)[numbers.length - 1];
}

console.log(findMaxSort([5, 7, 27, 31, 18, 4, 101]))