// ternary
// const newVariable = condition ? (value if condition is true) : (value if consdition is false)

// example
const value = 5;
const isEven = value % 2 === 0 ? true : false;

//////////////////////////////////////////////////////

// spread operator

const obj = {a: 1, b: 2, c: 3};
// ...obj

const newObj = { ...obj, d: 4, e: 5 }

function doSomething(numbers) {
    // function does not allow for arrays as parameters
    // function expects many numbers not in an array
    // ex doSomething(4, 6, 3, 6, 7)
}
const param = [5, 6, 3, 76, 8]
doSomething(...param)

/////////////////////////////////////////////////

// object destructuring

const testObj = {a: 1, b: 2, c: 3}
// const a = testObj.a   // this works, but.....
// const b = testObj.b   // this works, but.....
// const c = testObj.c   // this works, but.....
//instead, use destructuring

const { a, b, c } = testObj;
console.log(a, b, c);

/////////////////////////////////////////////////

//array destructuring

const arr = [1, 2, 3, 4, 5]
// const first = arr[0]
// const second = arr[1]
// etc.

//instead use destructuring
const [ first, second, third, ...rest ] = arr;
// first will be arr[0]
// second will be arr[1]
// third will be arr[2]
// rest will be [4, 5]
 const [, , third, fourth, fifth ] = arr // to only define third, fourth, and fifth items

 ////////////////////////////////

 // string interpolation
 // another way to put variables into a string
 // old way
 // const nameVariable = 'Lauren'; 
 // const newString = 'hello, I am ' + nameVariable;
 // new way
 const newString = `hello, I am ${nameVariable}`;
 const newStringInsultedMaybe = `hello, I am ${nameVariable === 'Lauren' ? 'stupid face' : nameVariable}`;