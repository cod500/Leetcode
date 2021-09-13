

// function binarySearch(array, val) {
//     let start = 0;
//     let end = array.length - 1;
//     let middle = Math.floor((start + end) / 2);

//     while (array[middle] !== val && start <= end) {
//         if (val < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//         middle = Math.floor((start + end) / 2);
//     }

//     return array[middle] === val ? `The value is found at index ${middle}` : "Not found"
// }
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30))

function binarySearch(array, val) {
    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end) / 2);

    while (val !== array[middle] && start <= end) {
        if (val > array[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }

        middle = Math.floor((start + end) / 2)
    }

    return array[middle] === val ? `The value is at index ${middle}` : "Value not found"
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30))

