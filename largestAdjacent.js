// find largest product of array
function largestProduct(array) {
    let largest = array[0] * array[1]

    for (i = 1; i < array.length; i++) {
        let product = array[i] * array[i + 1]

        largest = largest < product ? product : largest
    }

    return largest
}

console.log(largestProduct([50, 2, 3, 5, 6, 7]))