// // 19) Write a function that prints (console.logs) a triforce made out of *

// //function makeTriforce() {}
// //        *
// //       * *
// //      *   *
// //     *******
// //    * *   * *
// //   *   * *   *
// //  *     *     *
// // ***************

// function squarePattern() {
// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) { 
//   for (let j = 0; j < n; j++) { 
//     string += "*";
//   }
//   string += "\n";
// }
// return string 
// }
// console.log(squarePattern());

// ///////////////////////////////////////

// function rightTriangle() {
//   let n = 5;
//   let string = "";
//   for (let i = 1; i <= n; i++) { // why is i 1 instead of 0
//     for (let j = 0; j < i; j++) {
//       string += "*" 
//     }
//     string += "\n"
//   }
//   return string;
// }
// console.log(rightTriangle())

// ///////////////////////////

// function leftTriange(){
//   let n = 5;
//   let string = "";
//   for (let i = 1; i <= n; i++){
//     for (let j = 0; j < n - i; j++){
//       string += " "; // this prints the spaces. 
//     }
//     for (let k = 0; k < i; k++){
//       string += "*"; // this prints the stars
//     }
//     string += "\n"; // starts a new line once all conditions within the for loop are met.
//   }
//   return string;
// }

// console.log(leftTriange())

// /////////////////////////

// function downTriangle(){
//   let n = 5;
//   let string = "";
//   for (let i = 0; i < n; i++){
//     for (let k = 0; k < n - i; k++){
//       string += "*"
//     }
//     string += "\n" // no space loop is needed bc the first line is 5 starts and it is " left aligned "
//   }
//   return string
// }

// console.log(downTriangle())



// /////////////////////////////

// function downTriangleReverse(){
//   let n = 5;
//   let string = "";
//   for (let i = 0; i < n; i++){
//     for (let j = 0; j < i; j++){
//       string += " "; // this prints the spaces. 
//     }
//     for (let k = 0; k < n - i; k++){
//       string += "*"; // this prints the stars
//     }
//     string += "\n"; // starts a new line once all conditions within the for loop are met.
//   }
//   return string;
// }

// console.log(downTriangleReverse())



// /////////////////////////////

// function pyramidPattern(){
//   let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// return string
// }

// console.log(pyramidPattern())


// ////////////////
// // The number of spaces in a row is i and the number of stars is 2 * (n - i) - 1.

// function reversePyramid(){
//   let n = 5;
//   let string = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <i; j++) {
//       string += " ";
//     }
//     for (let k = 0; k <2 * (n-i) - 1; k++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   return string
// }

// console.log(reversePyramid())



// ////////////////

// function diamondPattern(){
//   let n = 5;
//   let string = "";
//   //top of diamond code
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j > i; j--){
//       string += " ";
//     }
//     for (let k = 0; k < i * 2 - 1; k++){
//       string += "*";
//     }
//     string += "\n"
//   }
//     //bottom of diamond code
//     for (let i = 1; i <= n - 1; i++){
//       for (let j = 0; j < i; j++) {
//         string += " ";
//       }
//       for (let k = (n - i) * 2 - 1; k > 0; k--){
//         string += "*";
//       }
//       string += "\n"
//     }
// return string
//   }

// console.log(diamondPattern())

// ////////////////

// function hourglassPattern(){
//   let n = 5;
//   let string = "";
//   for (let i = 0; i < n; i++){
//     for (let j = 0; j < i; j++){
//       string += " ";
//     }
//     for (let k = 0; k < (n - i) * 2 - 1; k++) {
//       string += "*"
//     }
//     string += "\n"
//   }
//   for (let i = 2; i <= n; i++) {
//     for (let j = n; j > i; j--){
//       string += " ";
//     }
//     for (let k = 0; k < i * 2 - 1; k++){
//       string += "*";
//     }
//     string += "\n"
//   }
//   return string
// }

// console.log(hourglassPattern())

// ////////////////

// function rightPascal(){
//   let n = 5;
//   let string = "";
//     for (let i = 1; i <= n; i++){
//       for (let j = 0; j < i; j++){
//         string += "*";
//       }
//       string += "\n"
//     }
//     for (let i = 1; i <= n - 1; i++) {
//       for (let j = 0; j < n - i; j++){
//         string += "*";
//       }
//       string += "\n"
//     }
//     return string
// }

// console.log(rightPascal())

// ////////////////

// function leftPascal(){
//   let n = 5;
//   let string = "";
//     for (let i = 1; i <= n; i++) {
//       for (let j = 0; j < n - i; j++) {
//         string += " ";
//       }
//       for (let k = 0; k < i; k++){
//         string += "*"
//       }
//       string += "\n"
//     }
//     for (let i = 1; i <= n - 1; i++) { 
//       for (let j = 0; j < i; j++) {
//         string += " ";
//       }
//       for (let k = 0; k < n - i; k++) {
//         string += "*"
//       }
//       string += "\n"
//     }
//     return string;
// }

// console.log(leftPascal())


// /////////

// function hollowSquare() {
//   let n = 5;
//   let string = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++){
//       if (i == 1 || i == n || j == 1 || j == n) {
//       string += "*"
//       }else{
//         string += " ";
//       }
//       }
//       string += "\n"
//     }
//     return string
//   }

//   console.log(hollowSquare())

//   //////

//   function hollowPyramid() {
//     let row = 5;
//     let string = "";
    // for (let i = row; i > 0; i--) {
    //   for (let j = 1; j < i; j++) {
    //     string += " ";
//       } {
      //   for (let j = 1; j <= (row * 2 - (2 * i - 1)); j++) {
      //     if (i == 1 || j == 1 || j == (row * 2 - (2 * i - 1))) {
      //       string += "*";;
      //     } else {
      //       string += " ";
      //     }
      //   }
      // }
//       string += "\n"
//     }
//     return string
//   }
// console.log(hollowPyramid())


/////////////


function makeTriforce() {
  let n = 5; 
  let string = "";
// top triangle
for (let i = 1; i <= n; i++) { 
  for (let j = 1; j <= 2* n - i; j++) { 
    string += " ";
  } 
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  } 
  string += "\n"; 
}
// bottom two triangle
for (let i = 1; i <= n; i++) { 
  for (let j = 1; j <= n - i; j++) { 
    string += " ";
  } 
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  for (let j = 1; j <= n - i; j++) { 
    string += " ";
  }
  for (let j = 1; j <= n - i; j++) { 
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n"; 
} 
return string
}
console.log(makeTriforce())

/////////////

// // function makeHallowTriforce() {
//   let n = 5; 
//   let string = "";
// // top triangle
// for (let i = 1; i <= n; i++) { 
//   for (let j = 1; j <= 2* n - i; j++) { 
//     string += " ";
//   } 
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   } 
//   string += "\n"; 
// }
// // bottom two triangle
// for (let i = 1; i <= n; i++) { 
//   for (let j = 1; j <= n - i; j++) { 
//     string += " ";
//   } 
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   for (let j = 1; j <= n - i; j++) { 
//     string += " ";
//   }
//   for (let j = 1; j <= n - i; j++) { 
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n"; 
// } 
// return string
// }
// console.log(makeTriforce())
 



// console.log(makeHallowTriforce())

/////////////

