//CHALLENGE 1

//Function parameters are the names listed in the function definition.
// function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
//}

// Challenge 1 has to do with array sorting?
// array is a single variable that is used to store different elements.

// kind of confused on this one - had to look up alot

function sortNumber() {
  numbers.sort(function(a, b){return a-b});
  document.getElementById("sort").innerHTML = numbers;
}

var numbers = [17, 12, 37, 2, 8, 14, 1, 99];
document.getElementById("sort").innerHTML = numbers;


// CHALLENGE 2
// anything that is not a number needs to be surrounded by "quotations"


function sortLetters() {
  letters = letters.sort(function(a, b) {
    if (a.toLowerCase() === b.toLowerCase()) {
      return a > b ? 1 : -1;
    }
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  });
  document.getElementById("sort2").innerHTML = letters;
}

var letters = [ "g", "f", "a", "t", "T", "h", "l", "u", "b"];
document.getElementById("sort2").innerHTML = letters;


// CHALLENGE 3
// Check for false
// function isEven(number) {}<!
// i dont understand the meaning of <! 


function isEven(){
  //get the input value
  var num = document.getElementById('num').value;

  //if the remainder value is 0 then it is an even number
  //we are using % modulus operator to get the remainder value
  if ( num % 2 === 0) {
    //using string interpolation to simplify the resulting string
      // document.getElementById('result').innerHTML = `${num} is ${num % 2 === 0 ? '' : 'not'} even.`;
      document.getElementById('result').innerHTML = num + ' is even. True';
  }else{
      // document.getElementById('result').innerHTML = `${num} is not even. False`;
      document.getElementById('result').innerHTML = num + ' is not even. False';
  }

}        

// CHALLENGE 4
// reversing a string 
//arr.split and arr.reverse are used here. 

function reverseSentence(sentence) {
  var sentence = "Billy is best boy!"
  sentence = (sentence.split(/\s/).reverse().join(" "));
  document.getElementById('reverse').innerHTML = sentence;

 
}

// CHALLENGE 5
//isNaN?
//A JavaScript string stores a series of characters like "John Doe".
//A string can be any text inside double or single quotes:
//.slice method or .filter?


function onlyStrings(value){
  if (typeof value === 'string'){
    return value;}
  document.getElementById('numstr').innerHTML = stringsOnly;
}

  var returnArray = [4, "billy is best boy", 7, "pascal is demon child", 22, "bobby is babby"];
  var stringsOnly = returnArray.filter(onlyStrings);

  document.getElementById('numstr').innerHTML = returnArray;


// CHALLENGE 6
// true false statements - booleans
// if? while? else?
  
function isDivisibleby(){
   num1 = document.getElementById("num1").value;
   num2 = document.getElementById("num2").value;
    if (num1 % num2 === 0){
      document.getElementById('resultDivide').innerHTML = true;
    }else{
      document.getElementById('resultDivide').innerHTML = false;
    }}

    function test(g) {
      if (g === true) {
        var x = 5;
      }
      console.log(x);
      if (g === true) {
        let y = 6;
      }
      console.log(y)
    }




    /// addTogether(2)(3) // shoudl return 5 /// DANIS MEAN QUESTION