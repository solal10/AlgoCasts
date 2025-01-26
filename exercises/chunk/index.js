// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let temp=[];
    let ret_arr=[];
    let j=0;
    for(let i=0 ;i<array.length;i++){
        temp.push(array[i]);
        j+=1
        if(j === size){
            ret_arr.push(temp)
            j=0
            temp = []
        }
    }
    if(temp.length>0){
        ret_arr.push(temp)
    }
    return ret_arr
}

module.exports = chunk;
