//Write a program that takes the following nested matrix and flattens it (makes it a 1D array): let multiDimension = [1, [2, 3, [4, 5, [6]]]]. Use any type of algorithm you want like callbacks, recursion, etc.

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let flat = [];
function flatten(arr) {

    //For each element of the array, check if it's an array:
    for (let i = 0; i < arr.length; i++) {

    //Until array stops being an array, flatten it:
        if (Array.isArray(arr[i])) {
            flatten(arr[i]);
        } else {
            flat.push(arr[i]);
        }
    }
}

flatten(multiDimension);

console.log(flat);
