function areSimilar(array1, array2) {
    let array1Obj = {};
    let isSimilar = true

    array1.forEach(item => {
        if (!array1Obj[item]) {
            array1Obj[item] = array1Obj[item];
            array1Obj[item] = 1
        } else {
            array1Obj[item]++
        }
    });

    array2.forEach(item => {
        if (!array1Obj[item]) {
            return isSimilar = false;
        } else if (array1Obj[item] <= 0) {
            delete array1Obj[item];
            return isSimilar = false;
        } else {
            array1Obj[item]--
        }

    })

    return isSimilar;
}

console.log(areSimilar([1, 1, 2], [2, 1, 1]));

//create object of first array
//loop through second array and compare array1 object
//if number property not in object return false
// if object has values greater than 0, subtract value 
//if value is equal or less than equal to 0, delete property from object
// return true if passes through loop