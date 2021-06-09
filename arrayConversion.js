function arrayConversion(array) {
    isOdd = true;
    while (array.length !== 1) {
        array = sumArray(array, isOdd);
        isOdd = !isOdd;
    }

    return array[0]
}

function sumArray(array, oddOrEven) {
    let sumProducts = [];

    if (oddOrEven) {
        for (let i = 0; i < array.length; i += 2) {
            sumProducts.push(array[i] + array[i + 1])
        }
    } else {
        for (let i = 0; i < array.length; i += 2) {
            sumProducts.push(array[i] * array[i + 1])
        }
    }

    return sumProducts
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))

