// User inouts word and function will shift each letter to the next letter
// Added input to choose how many to shift 

function shiftingLetters(input, shift) {
    let word = input.split("")
    let newWord = [];

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        let num;

        num = letter.charCodeAt(0) + shift;
        console.log(num)

        if (num > 122) {
            let difference = 122 - letter.charCodeAt(0)
            let newShift = num % 26;
            num = 96 + (newShift - difference);
            console.log(num)

        }

        let num2 = String.fromCharCode(num);

        newWord.push(num2);
        console.log(newWord)
    }

    return newWord.join("");

}

console.log(shiftingLetters("h", 25))