function equallyStrong(yourLeft, yourRight, friendLeft, friendRight) {
    if (isNaN(yourLeft) || isNaN(yourRight) || isNaN(friendLeft) || isNaN(friendRight)) return "Must be all number"

    if (yourLeft === friendLeft && yourRight === friendRight) {
        return true;
    } else if (yourRight === friendLeft && yourLeft === friendRight) {
        return true;
    } else {
        return false;
    }
}

console.log(equallyStrong(10, 15, 15, 10));
console.log(equallyStrong(15, 10, 15, 10));
console.log(equallyStrong(15, 10, 15, 9));






