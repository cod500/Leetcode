function arrayMax(array) {
    let max = 0;

    for (let i = 0; i < array.length; i++) {
        if (max < array[i] + array[i + 1]) {
            max = array[i] + array[i + 1]
        }
    }


    return max;
}

console.log(arrayMax([2, 3, 5, 1, 9]))

//find max sum of consecutive elements in array