// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let temp=0
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<(arr.length)-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        
    }
    return arr
}

function selectionSort(arr) {
    let indexofmin=0
    for(let i=0;i<arr.length;i++){
        indexofmin=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[indexofmin]>arr[j]){
                indexofmin=j
            }
        }
        if(arr[indexofmin] != arr[i]){
            let temp=arr[indexofmin]
            arr[indexofmin]=arr[i]
            arr[i]=temp
        }
    }
    return arr
}


function mergeSort(arr) {
    if(arr.length <= 1){
        return arr
    }
    const center = Math.floor(arr.length/2)
    const left =arr.slice(0,center)
    const right=arr.slice(center)
    
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right) {
    let result=[]
    let i=0
    let j=0
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j])
            j++
        }
    }
    while(i<left.length){
        result.push(left[i])
        i++
    }
    while(j<right.length){
        result.push(right[j])
        j++
    }
    return result
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
