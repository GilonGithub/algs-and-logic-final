/*
write a function that loops through an array of numbers, and arrays, and adds all of the numbers
ex. [2, 3, 5, [1, 2], [3]] ---> 16
*/

const sumNestedArray = function (arr) {

    //declare a variable that will hold the sum of the elements of the array
    let sum = 0;

    //loop through the contents of the array
    for(i = 0; i < arr.length; i++) {

        //determine if the element of the greater array is another array.
        if(Array.isArray(arr[i])) {
            //loop through the contents of the array
            for(j = 0; j < arr[i].length; j++) {
                //add to the sum the elements in the sub-array
                sum += arr[i][j];
            }
        } else {
            //add to the sum the elements in the greater array
            sum += arr[i];
        }
    }

    //return the sum of all the values of the array
    return sum;
}

console.log((sumNestedArray([1, [2, 3, 4], 6, 7, 5]) === 28) ? "Test 1: Passing" : "Test 1: Failing");

console.log((sumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]) === 33) ? "Test 2: Passing" : "Test 2: Failing");