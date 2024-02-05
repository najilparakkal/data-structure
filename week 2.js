// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped = false;
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
// }
// let arr = [6,5,4,3,2,1]
// bubbleSort (arr)
// console.log(arr);

// function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//         let pivot = partition(arr,left,right)
//         quickSort(arr,left,pivot-1)
//         quickSort(arr,pivot+1,right)
//     }
//     return arr
// }
// function partition(arr,left,right){
//     let pivot = arr[right]
//     let i= left-1
//     for(let j=left;j<right;j++){
//         if(arr[j]<pivot){
//             i++;
//             swap(arr,i,j)
//         }
//     }
//     swap(arr,i+1,right)
//     return i+1
// }
// function swap(arr,i,j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }
// let arr = [6,5,4,3,2,1]
// console.log(quickSort(arr));


// function  insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let insertionNumber = arr[i]
//         let j = i-1;
//         while(j>=0 && arr[j] >insertionNumber){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = insertionNumber
//     }
// }
// let arr = [6,5,4,3,2,1]
// insertionSort(arr)
// console.log(arr);

// function mergSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merg(mergSort(leftArr),mergSort(rightArr))
// }
// function merg(leftArr,rightArr){
//     let sortArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<rightArr[0]){
//             sortArr.push(leftArr.shift())
//         }else{
//             sortArr.push(rightArr.shift())
//         }
//     }
//     return [...sortArr,...leftArr,...rightArr]
// }
// let arr = [6,5,4,3,2,1]
// console.log(mergSort(arr));

// function selectionSort(arr){
//      for(let i = 0;i<arr.length-1;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         if(min != i){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//      }
// }
// let arr = [6,5,4,3,2,2]
// selectionSort(arr)
// console.log(arr);

// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total %this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const samkey = bucket.find(item => item[0] === value)
//             if(samkey){
//                 samkey[1] = [value]
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samkey = bucket.find(item => item [0] === key)
//             if(samkey){
//                 return samkey[1]
//             }
//         }
//         return undefined
//     }
//     reverse(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samkey = bucket.find(item => item [0] === key)
//             if(samkey){
//                 return samkey[1]=String(samkey[1]).split("").reverse().join("")
//             }
//         }
//     }
//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samkey = bucket.find(item => item [0] === key)
//             if(samkey){
//                 return bucket.splice(bucket.indexOf(samkey),1)
//             }
//         }
//     }
//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i] ){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }
// const table = new hashTable(10)
// table.set("name","najil")
// table.set("week",14)
// table.set("BCE",133)
// table.set("BCE",144)
// table.print()
// console.log(table.get("BCE"));
// console.log(table.reverse("name"));
// table.print()





class stack{
    constructor(){
        this.element= []
    }
    push(data){
        this.element.push(data)
    }
    pop(){
        return this.element.pop()
    }
    peek(){
        return this.element[this.element.length-1]
    }
    largest(){
        let largest = this.element[0]
        for(let i=1;i<this.element.length;i++){
            if(this.element[i]>largest){
                largest = this.element[i]
            }
        }
        return largest
    }
    smallest(){
        let smallest = this.element[0]
        for(let i=1;i<this.element.length;i++){
            if(this.element[i]<smallest){
                smallest = this.element[i]
            }
        }
        return smallest
    }
    secondlargest(){
        let largest = this.element[0]
        let secondlargest = this.element[1]
        if(secondlargest>largest){
            [largest,secondlargest] = [secondlargest,largest]
        }
        for(let i=2;i<this.element.length;i++){
            if(this.element[i]>largest){
                secondlargest = largest
                largest = this.element[i]
            }else if(this.element[i]>secondlargest && this.element[i]!== largest){
                secondlargest = this.element[i]
            }
        }
        return [largest,secondlargest]
    }
    isValidParentheses(s) {
        const stack = [];
    
        for (let char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                const lastOpenParenthesis = stack.pop();
                if ((char === ')' && lastOpenParenthesis !== '(') ||(char === ']' && lastOpenParenthesis !== '[') ||(char === '}' && lastOpenParenthesis !== '{')) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    secondSmallest(){
        let smallest = this.element[0]
        let secondSmallest = this.element[1]
        if(smallest>secondSmallest){
            [smallest,secondSmallest] = [secondSmallest,smallest]
        }
        for(let i=2;i<this.element.length;i++){
            if(this.element[i]<smallest){
                secondSmallest = smallest
                smallest = this.element[i]
            }if(this.element[i]<secondSmallest&& this.element[i]!==smallest){
                secondSmallest = smallest
            }
        }
        return [smallest,secondSmallest]
    }
    mid(){
        const middleIndex = Math.floor(this.element.length/2)
        return this.element.splice(middleIndex,1)
    }
    print(){
        console.log(this.element);
    }
}
const s = new stack()
s.push(20)
s.push(40)
s.push(10)
s.push(50)
s.push(2)
s.print()
console.log(s.mid("(){)"));
s.print()
