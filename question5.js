/*
write a function that loops through an array of numbers, and arrays, and adds all of the numbers
ex. [2, 3, 5, [1, 2], [3]] ---> 16
*/

const sumNestedArray = function (arr) {

    let sum = 0;

    for(i = 0; i < arr.length; i++) {

        if(Array.isArray(arr[i])) {
            for(j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        } else {
            sum += arr[i];
        }
    }

    return sum;
}

console.log((sumNestedArray([1, [2, 3, 4], 6, 7, 5]) === 28) ? "Test 1: Passing" : "Test 1: Failing");

console.log((sumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]) === 33) ? "Test 2: Passing" : "Test 2: Failing");