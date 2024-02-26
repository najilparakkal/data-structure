

function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
    return arr;
}   
function heapify(arr,index,size){
    let left = 2*index+1
    let right = 2*index +2
    let largestIndex = index
    if(left<size && arr[left]>arr[largestIndex]){
        largestIndex = left
    }
    if(right<size && arr[right]>arr[largestIndex]){
        largestIndex = right
    }
    if(largestIndex!== index){
        [arr[index],arr[largestIndex]] = [arr[largestIndex],arr[index]]
        heapify(arr,largestIndex,size)
    }
}
let arr = [32,45,12,75,43,2]
console.log(heapSort(arr));