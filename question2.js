// write a function that loops through an array of strings and numbers. 
// for every string, it should add an s to the end of the word 
// (for example, if the given word was apple, it would become apples)
// for every number, it should add 20 to the number. 
// return the changed array. 

const addSAnd20 = function (arr) {

    //loop through the contents of the array
    for(i = 0; i < arr.length; i++) {
        //validate whether the element is a string or not
        if(typeof(arr[i]) === "string") {
            //add s for every string element
            arr[i] = arr[i].concat('s');
        } else {
            //add 20 for non-string element
            arr[i] += 20;
        }
    }
    //return the array
    return arr;
}

console.log(addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71]));
console.log(addSAnd20([56, 45, 71, 90, 28, 67]));
console.log(addSAnd20(['dog', 'apple', 'cheese']));

// console.log((addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71]) === [76, 'dogs', 'apples', 'cheeses', 65, 91]) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((addSAnd20([56, 45, 71, 90, 28, 67]) === [76, 65, 91, 110, 48, 87]) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((addSAnd20(['dog', 'apple', 'cheese']) === ['dogs', 'apples', 'cheeses']) ? "Test 3: Passing" : "Test 3: Failing");