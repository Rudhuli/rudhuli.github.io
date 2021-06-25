function findMax(numbers){
    return numbers.reduce ((x, y) => x > y ? x : y)
}
console.log(findMax([5, 7, 27, 31, 18, 4, 101]))