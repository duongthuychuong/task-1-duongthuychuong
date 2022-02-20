function checkList(list, k) {
    for (let x = 0; x < list.length - 1; x++) {
        for (let y = x + 1; y < list.length; y++) {
            let sum = list[x]+list[y]
            if( (sum) === k) {
                return true
            }
        }
        
    }
    return false
}
console.log(checkList([10, 15, 3, 7],17))