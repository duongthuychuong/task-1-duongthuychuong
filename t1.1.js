function sortedText(str) {
    let arrayText = str.split("")
    let sortedArray = arrayText.sort()
    let arrayToText = sortedArray.join("")
    return arrayToText
}
 
console.log(sortedText("webmaster"))