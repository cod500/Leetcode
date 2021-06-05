function equallyStrong(yourLeft, yourRight, friendLeft, friendRight) {
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const friendStrongest = friendLeft >= friendRight ? friendLeft : friendRight;
    const friendWeakest = friendLeft <= friendRight ? friendLeft : friendRight;

    return yourStrongest === friendStrongest && yourWeakest === friendWeakest;

}

console.log(equallyStrong(10, 15, 15, 10));
console.log(equallyStrong(15, 10, 15, 10));
console.log(equallyStrong(15, 10, 15, 9));