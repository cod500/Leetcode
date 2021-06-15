function meanMedianMode(array) {

    let meanOfArray = mean(array)
    let medianOfArray = median(array);
    let modeOfArray = mode(array);


    return `The mean is ${meanOfArray}, the median is ${medianOfArray}, and the mode is ${modeOfArray}`
}

function mean(array) {
    let total = array.reduce((total, num) => {
        return total + num
    });

    return total / array.length

}

function median(array) {
    let middle = array.sort();
    let middleIndex = Math.floor(array.length / 2)

    return middle[middleIndex]
}

function mode(array) {

    let arrayObj = {};
    let max = [];
    let modeNumbers = []

    array.forEach((num) => {
        if (!arrayObj[num]) {
            arrayObj[num] = 1;
        } else {
            arrayObj[num]++;
            max.push(arrayObj[num]);
        }
    });

    for (number in arrayObj) {
        if (arrayObj[number] === Math.max(...max)) {
            modeNumbers.push(number)
        }
    }

    return modeNumbers.join(',');


}

console.log(meanMedianMode([1, 2, 2, 2, 3, 4, 6]))
