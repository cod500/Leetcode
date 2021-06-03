// Wrint function to see if string is in alphabetical order
function alphabetSequence(string) {
    let lastLetter = string.charCodeAt(string[0]);
    for (i = 1; i < string.length; i++) {
        if (i + 1 === string.length) {
            return lastLetter < string.charCodeAt(i);
        }
        if (string.charCodeAt(i) < lastLetter) {
            return false
        } else {
            lastLetter = string.charCodeAt(i);
        }
    }
}

console.log(alphabetSequence('abc'))
