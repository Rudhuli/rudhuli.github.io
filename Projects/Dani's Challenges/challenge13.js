//13) Write a function that takes an array of numbers as a parameter and returns an array of only positive numbers.
//math.abs(x) - function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
//math.sign -  function returns either a positive or negative +/- 1


//function onlyPositive(numbers) {}

// Math.abs(x) // // maths.abs only returns one number - if more than one returns NaN

{let numbers = [ -75, 21, 38, -2, 45, -87]
console.log(Math.abs(numbers))


// can use Math.abs if you console log each individual integer. 
console.log(Math.abs(-75))
console.log(Math.abs(21))
console.log(Math.abs(31))
console.log(Math.abs(-2))
console.log(Math.abs(45))
console.log(Math.abs(-87)) 
}

//but the goal is to take an array of numbers and return positive numbers. 

//Math.sign(x)
//Math.Sign returns only 1, 0, -1, and NaN

{let numbers = [ -75, 21, 38, -2, 45, -87]
console.log(Math.sign(numbers)) // returns NaN
console.log(Math.sign(-75))
console.log(Math.sign(21))
console.log(Math.sign(31))
console.log(Math.sign(-2))
console.log(Math.sign(45))
console.log(Math.sign(-87))
}

// Neither of these math functions work for what we are trying to acheive 
// Let's try using filter()


{ let numbers = [ -75, 21, 38, -2, 45, -87]
posNumbers = numbers.filter (numbers => numbers > -1) // this filters out any integers that are greater than -1
console.log(posNumbers) 
}


function onlyPositive(numbers) {
    posNumbers = numbers.filter (numbers => numbers > -1)
    return posNumbers; 

}

console.log(onlyPositive([-75, 21, 38, -2, 45, -87]))


// But how to convert negative numbers to positive? an return that array. 
// use map

{let numbers = [ -75, 21, 38, -2, 45, -87]
numbers = numbers.map (s => Math.abs(s));
console.log(numbers)}

function mapPositive(numbers){
numbers = numbers.map (s => Math.abs(s));
return numbers;
}

console.log(mapPositive([-75, 21, 38, -2, 45, -87]))
