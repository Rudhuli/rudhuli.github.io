// 17) Write a function that takes a sentence as a parameter and returns the sentence in Title Case (first letter of each word capitalized). Bonus: make it so that articles (a, an, the, etc) are not capitalized.

// function toTitleCase(string) {}
// FOR LOOP


function toTitleCase(str) {
str = str.toLowerCase().split(' ');
for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  // — which will uppercase the index 0 character of the current string in the FOR loop — // — which will extract from index 1 to the end of the string.

}
return str.join(' ');
}

console.log(toTitleCase("Billy is a good beau"))

// MAP() METHOD

function toTitleCaseMap(str){
    return str.toLowerCase().split(' ').map(function(word) {// lowercases the entire string // splits the string into seperate words //maps the array. 0 finds the first letter in array and makes it uppercase.
        return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');  //returns the output joined back together
    }

console.log(toTitleCaseMap("Billy is a good beau"))   


// MAP AND REPLACE

function toTitleCaseMapReplace(str){
    return str.toLowerCase().split(' ').map(function(word) { // str = str.toLowerCase lowercases string. .split splits to an array
        return word.replace(word[0], word[0].toUpperCase());
    }) .join(' ')
}

console.log(toTitleCaseMapReplace("Billy is a good beau"))   

// split article

function toTitleCaseDone(str) {
    var i, j, str, lowers, uppers,
    str = str.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  
    lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 
    'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
    for (i = 0, j = lowers.length; i < j; i++)
      str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), 
        function(txt) {
          return txt.toLowerCase();
        });
  
    uppers = ['Id', 'Tv', 'Mvp'];
    for (i = 0, j = uppers.length; i < j; i++)
      str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), 
        uppers[i].toUpperCase());
  
    return str
  }

  console.log(toTitleCaseDone("Billy ThE (mvp) dog IS A verY GoOd boy/doggo"))


  // words after / do not capitilize. find solution. 

