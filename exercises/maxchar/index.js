// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let dict={};
    max_value=0
    let max_char=''
    for(let char of str){
        if(!dict[char]){
            dict[char]=1;
        }
        else{
            dict[char]+=1;
        }
        if(dict[char]>max_value){
            max_value=dict[char]
            max_char=char
        }
    }
    return max_char
}

module.exports = maxChar;
