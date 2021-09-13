// //map
// let myArray = [2, 3, 4, 5, 6];

// let newArray = myArray.map((value) => {
//     return value + 1;
// })

// console.log(newArray);

// //filter

// let newFilter = myArray.filter((value) => {
//     return value > 4;
// });

// console.log(newFilter);

// //reduce
// let newReduce = myArray.reduce((total, value) => {
//     return total + value;
// });

// console.log(newReduce);

// console.log(typeof undefined === 'undefined');


//numbers with any argument
function sumAny(...numbers) {
    let newSum = numbers.reduce((total, value) => {
        return total + value;
    });

    return newSum;
}

console.log((sumAny(1, 2, 3, 4, 5, 6)));


//Stringincludes long gway
// function stringIncludes(stringText, word) {
//     let stringArray = stringText.split(" ");
//     let arrayNote = word.split(" ")
//     let stringObject = {};
//     let textinString = true;

//     stringArray.forEach((text) => {
//         if (!stringObject[text]) {
//             stringObject[text] = 1;
//         } else {
//             stringObject[text]++;
//         }
//     });

//     arrayNote.forEach((word) => {
//         if (!stringObject[word]) {
//             textinString = false;
//         }
//     })

//     return textinString;
// }

// console.log(stringIncludes("there is a place", "there"));

//String include with javascript methods
// function stringIncludesShort(string1, string2) {
//     let lowerString2 = string2.toLowerCase();

//     return string1.toLowerCase().includes(lowerString2)
// }

// console.log(stringIncludesShort("there is a place", "theres"))


// Write a function that takes an array of objects and returns an array of the objects name property only if that property exists 

function getNames(array) {
    //loop through array
    let nameValues = []
    array.forEach((prop) => {
        if (prop["name"]) {
            nameValues.push(prop["name"])
        }
    }
    )
    return nameValues;
}

console.log(getNames([{
    name: "clayton"
},
{
    last: "Dunbar"
},
{
    name: "Jen"
}
]))