
function linearSearch(arr,target){
    for(let i=0;i<arr.length-1;i++){
        if(target === arr[i]){
            return i
        }
    }
    return -1
}
let arr = [1,2,3,4,5,6]
console.log(linearSearch(arr,5));
