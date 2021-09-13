// function Caesar(word, shift) {
//     let wordArray = word.split("");
//     let wordNum = []


//     wordArray.forEach((letter) => {
//         let num = letter.charCodeAt(0) + shift;
//         if (num > 122) {
//             let loopedLetter = num - letter.charCodeAt(0);
//             let newLetter = 96 + loopedLetter;
//             wordNum.push(String.fromCharCode(newLetter));
//         } else {
//             wordNum.push(String.fromCharCode(num))
//         }
//     });

//     return wordNum
// }

// console.log(Caesar("doomz", 1))

// function meanMedianMode(array) {
//     return `The mean is ${findMean(array)}, the median is ${findMedian(array)}, and the mode is ${findMode(array)}`
// }

// function findMedian(numbers) {
//     let median = 0;
//     if (numbers.length % 2 == 0) {
//         median = numbers[Math.ceil(numbers.length / 2)]
//     } else {
//         median = numbers[Math.ceil(numbers.length / 2)] / numbers[Math.ceil(numbers.length / 2) + 1]
//     }

//     return median;
// }

// function findMean(array) {
//     let mean = array.reduce((accum, next) => {
//         return accum + next;
//     });

//     return mean / array.length
// }

// function findMode(array) {
//     let arrayObj = {};
//     let most = [];
//     let mode = []

//     array.forEach((number) => {
//         if (!arrayObj[number]) {
//             arrayObj[number] = 1;
//         } else {
//             arrayObj[number]++
//             most.push(arrayObj[number])
//         }
//     });

//     for (number in arrayObj) {
//         if (arrayObj[number] === Math.max(...most)) {
//             mode.push(number);
//         };

//     }

//     return mode.join(",");
// }

// console.log(meanMedianMode([1, 2, 3, 4, 5, 2]))




function twoSum(numArray, sum) {
    let sumArray = [];
    let sumObj = {}
    for (let i = 0; i < numArray.length; i++) {
        if (!sumObj[numArray[i]]) {
            sumObj[numArray[i]] = numArray[i];
        }

        let difference = sum - sumObj[numArray[i]]

        if (sumObj[difference]) {
            sumArray.push([difference, sumObj[numArray[i]]])
        }
    }

    return sumArray;

}

console.log(twoSum([1, 2, 5, 6], 11))

