// reverse array in place
//looop through array
//replace array i with counterpart at end of array
//put counterpart element in variable
//replace original element at beginning of array with counterpart variable 

function reverseArray(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp;
    }

    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]))