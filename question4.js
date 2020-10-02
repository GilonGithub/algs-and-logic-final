/*
Write a function that takes in an array of strings, and converts them all 
into snake case 
(ex. (['Dogs are cute', 'Cats aRe also cute']) ---> ['dogs_are_cute', 'cats_are_also_cute']) notice the 
lowercase letters, and underscores connecting the words. 
return the entire array with the converted strings
*/
const snakeCaseArr = function (arr) {
    
    //loop through the array
    for(i = 0; i < arr.length; i++) {
        //make the case of each element of the array into lower case
        arr[i] = arr[i].toLowerCase();
        //create a new array for each of the element of the greater array
        let word = arr[i].split(' ');
        //assign the new array as a string joined with '_' to the element of the greater array;
        arr[i] = word.join('_');
    }

    //return the modified array
    return arr;
}

console.log(snakeCaseArr(['Coding Is Fun']));
console.log(snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']));
console.log(snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']));

// console.log((snakeCaseArr(['Coding Is Fun']) === ['coding_is_fun']) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']) === ['coding_is_fun', 'dogs_are_cool']) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']) === ['cats_are_cute', 'dogs_are_cool']) ? "Test 3: Passing" : "Test 3: Failing");