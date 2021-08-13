// 18) Write a function that takes a string as a parameter and determines whether a word is a palindrome (spelled the same way forward as backward). Bonus, check if a sentence is a palindrome (not including the spaces between words)
// hint: check for capitalization
// Return true if the given string is a palindrome. Otherwise, return false.

// /[^A-Za-z0–9]/g  or  /[\W_]/g

// \W removes all non-alphanumeric characters:

// \W matches any non-word character
// \W is equivalent to [^A-Za-z0–9_]
// \W matches anything that is not enclosed in the brackets

// [^A-Z] matches anything that is not enclosed between A and Z

// [^a-z] matches anything that is not enclosed between a and z

// [^0-9] matches anything that is not enclosed between 0 and 9

// [^_] matches anything that does not enclose _

///////////////////////////////////////////////////////////////////////////////////////

function isPalindrome(str) {
    let re = /[\W_]/g; // or use let re = /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(re, '') // this lower cases all the letters and removes spaces and puncuation. . 
    let reverseStr = lowRegStr.split('').reverse().join(''); // takes each individual letter and flips its position
    return reverseStr === lowRegStr;
}

console.log(isPalindrome("race car"))
console.log(isPalindrome("not a palindrome"))
console.log(isPalindrome("A man, a plan, a canal. Panama"))
console.log(isPalindrome("0_0 (: /-\ :) 0–0"))
console.log(isPalindrome("1 eye for of 1 eye."))

console.log('///////////////////////////////////////////////////////////////////////////////////////')
///////////////////////////////////////////////////////////////////////////////////////


function isPalindromeFor(str){
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    // create for loop here
    let len = str.length // = numbers of 'characters' in string
        for (let i = 0; i < len/2; i++){
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
            return true;
        }
}

console.log(isPalindromeFor("race car"))
console.log(isPalindromeFor("not a palindrome"))
console.log(isPalindromeFor("A man, a plan, a canal. Panama"))
console.log(isPalindromeFor("0_0 (: /-\ :) 0–0"))
console.log(isPalindromeFor("1 eye for of 1 eye."))