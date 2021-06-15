function isPalindrome(str) {
    let striArray = str.toLowerCase().split('');
    let allowedLeters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let rawStr = []

    striArray.forEach((letter) => {
        if (allowedLeters.indexOf(letter > -1)) {
            rawStr.push(letter);
        }
    })

    if (rawStr.join('') === rawStr.reverse().join('')) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome('racecuar'))