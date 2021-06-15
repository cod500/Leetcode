function harmlessRansomeNote(noteText, magazineText) {
    let magazineObj = {};
    let enoughText = true;

    magazineText.forEach((text) => {
        if (!magazineObj[text]) {
            magazineObj[text] = 1;
        } else {
            magazineObj[text]++
        }
    })

    noteText.forEach((note) => {
        if (!magazineObj[note] || magazineObj[note] <= 0) {
            return enoughText = false;
        } else {
            magazineObj[note]--
        }
    });

    return enoughText;
}

//create onject to hold magazine text
// see if there is enough magazine text to create note
//loop though note text, delete 1 magazine letter
// if magazine note not equal to or 0 on last loop, return true
// if magazine object value 0 or less, return false 

console.log(harmlessRansomeNote(['note'], ['note']))
