//12) Write a function that takes an array of numbers and/or strings (that contains duplicates) as a parameter and returns an array with the duplicates removed.
// A Set is a collection of unique values.
// indexOf() method returns the index of the first occurrence of an element in an array. For example:
//use the filter() method to include only elements whose indexes match their indexOf values:


//function removeDuplicates([strings and/or numbers]) {



//USING SET

function removeDuplicatesSet(array) {
let uniqueSet = new Set(array); // set only allows unique values
return uniqueSet
}
console.log(removeDuplicatesSet([17, 21, 'billy', 17, 2, 'bobby', 1, 'billy']))

//USING FILTER


// let uniqueFilter = [17, 21, 'billy', 17, 2, 'bobby', 1, 'billy']
// // console.log(uniqueFilter.indexOf('billy'))  // comes back 2
// uniqueFilter.forEach((c, index) => {
//     console.log(`${c} -  ${index} - ${uniqueFilter.indexOf(c)}`)
// });
// // output //
// /*
    // 17 -  0 - 0
    // 21 -  1 - 1
    // billy -  2 - 2
    // 17 -  3 - 0
    // 2 -  4 - 4
    // bobby -  5 - 5
    // 1 -  6 - 6
    // billy -  7 - 2
// */
// //remove the duplicates using filter(). 


function removeDuplicatesFilter(arrayFilter) {
        return arrayFilter.filter((a, b) => arrayFilter.indexOf(a) === b)
}; 

console.log(removeDuplicatesFilter([17, 21, 'billy', 17, 2, 'bobby', 1, 'billy']))



//Using ForEach
//include() returns true if an element is in an array or false if it is not.

    // let arrayFor = [17, 21, 'billy', 17, 2, 'bobby', 1, 'billy']
    // let uniqueFor = [];
    // arrayFor.forEach((c) => {
    //     if (!uniqueFor.includes(c))
    //     uniqueFor.push(c);
    // })
    // console.log(uniqueFor)

function removeDuplicatesFor(arrayFor){
    let result = []
    arrayFor.forEach((item, index) => { if (arrayFor.indexOf(item) == index) result.push(item) });
    return result;
    }
    console.log(removeDuplicatesFor([17, 21, 'billy', 17, 2, 'bobby', 1, 'billy']))



