// 16) Write a function that takes a sentence as a parameter and returns an object that shows how many occurences of each letter there are.
// ex. parameter = "I am a kinky ho."
// returns { a: 2, h: 1, i: 2, k: 2, m: 1, n: 1, o: 1, y: 1 }
//hint: make sure to check for capitalization.

function countOccurrences(string) {}


// convert to lowercase and remove spaces from the string 

{let str = "Billy is best boy.";
let lower = str.toLowerCase();
let remove = lower.split(" ").join("")
console.log(lower)
console.log(remove)

// count each occurance 
let count = [...remove].reduce((a, b) => {a[b] = a[b] ? a[b] + 1 : 1; return a }, {});
console.log(count)}
    
/////////////////////////////////////////////////////////////


function countOccurrences(str) {
    let lower = str.toLowerCase();
    let remove = lower.split(" ").join("")
    let count = [...remove].reduce((a, b) => {a[b] = a[b] ? a[b] + 1 : 1; return a }, {});
    return count }

console.log(countOccurrences("Billy is best boy."));
