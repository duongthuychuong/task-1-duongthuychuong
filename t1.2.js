function RLE(str){
    let text = str.split("")
    let result = [];
    let count = 1;
    let value = text[0];
    for (let i = 1; i < text.length; i++) {
        let entry = text[i];
        if (entry === value) {
            count += 1;
        } else {
            if(count !== 1){
                result.push(count)
            }
            
            result.push(value);
            count = 1;
            value = entry;
        }
    }
    if(count !== 1){
        result.push(count)
    }
    result.push(value);
    let textEncode = result.join("")
    return textEncode;
}

console.log(RLE("AABBBCCCCCAADDDD"))