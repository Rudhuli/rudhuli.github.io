// 15) Write a function that takes an array of numbers as a parameter and returns the number with the lowest value. You may use the Math Library for this problem, if you wish.

//////////////MATH.MIN/////////////////

// let numbers = [5, 7, 27, 31, 18, 4, 101];
// console.log(Math.min(...numbers))

function findMin(numbers) {
    let minNum = numbers.reduce((a, b) => Math.min(a, b))
    return minNum;
}

console.log(findMin([5, 7, 27, 31, 18, 4, 101]))


/////////////////////////////// USING FOR LOOP///////////////////////////////////////////////

function findMinFor(numbers){
    let minNum = numbers[0];
        for (let x = 1; x < numbers.length; x++){
            if (numbers[x]  < minNum)  minNum = numbers[x];  // use < instead of > to find Min. not max. 

        }
        return minNum;
}

console.log(findMinFor([5, 7, 27, 31, 18, 4, 101]))


/////////////////////////////// USING REDUCE ///////////////////////////////////////////////

function findMinReduce(numbers){
    return numbers.reduce ((x, y) => x < y ? x : y) // use < instead of > to find Min. not max. 
}
console.log(findMinReduce([5, 7, 27, 31, 18, 4, 101]))

/////////////////////////////// USING SORT ///////////////////////////////////////////////

function findMinSort(numbers){
    return minNum = numbers.sort((b, a) => a - b)[numbers.length - 1]; // for max its (a, b) // to get min use (b,a)
}
console.log(findMinSort([5, 7, 27, 31, 18, 4, 101]))