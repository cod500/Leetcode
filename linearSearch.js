function linearSearch(arr, val) {
    let found = false
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 56))