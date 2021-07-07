// Find the two elements in the array that adds up to the given input

function twoSum(array, num) {
    let compare = [];
    let sumArray = []
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let counterpart = num - current
        if (compare.indexOf(counterpart) !== -1) {
            sumArray.push([current, counterpart])
        }

        compare.push(array[i])
    }

    return sumArray

}

console.log(twoSum([1, 2, 3, 4], 5))