function reverseWord(word) {
    let wordArray = word.split(" ").filter(w => w !== '');;
    let newWord = [];

    for (let i = wordArray.length - 1; i >= 0; i--) {
        newWord.push(wordArray[i]);
    }

    return newWord.join(" ");
}

console.log(reverseWord("this is my word"))