const longestString = (array) => {
    let newStrings = [];
    let tally = {};
    let highest = array[0].length;
    let newArray = [];

    array.forEach((string) => {
        if (!tally[string]) {
            tally[string] = string.length
            highest = highest > string.length ? highest : string.length
        }
    })

    for (let prop in tally) {
        if (tally[prop] === highest) {
            newArray.push(prop)
        }
    }

    return newArray
}

console.log(longestString(["twenty", "yo", "1234567", "degallerie"]))
