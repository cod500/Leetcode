// User inouts word and function will shift each letter to the next letter

function shiftingLetters(input) {
    let word = input.split("")
    let newWord = [];

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        let num;
        if (word[i] === "z") {
            num = letter.charCodeAt(0) - 25;
        } else {
            num = letter.charCodeAt(0) + 1;
        }

        let num2 = String.fromCharCode(num);

        newWord.push(num2);
    }

    return newWord.join("");

}

console.log(shiftingLetters("hello"))