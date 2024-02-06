// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total %this.size
//     }
//     set(key,value){
//         const index  = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKey = bucket.find(item=>item [0] === value)
//             if(sameKey){
//                 sameKey[1] = [value]
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKey = bucket.find(item => item [0] === key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKey = bucket.find(item => item [0] === key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//     }
//     reverse(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKey = bucket.find(item => item [0] === key)
//             if(sameKey){
//                 return  String(sameKey[1]).split("").reverse().join("") 
//             }
//         }
//     }
//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }
// const table = new hashTable(10)
// table.set("name","najil")
// table.set("week",14)
// table.set("place" , "malappuram")

// table.print()
// console.log(table.reverse("week"));


// function quickSort(arr,left=0,right = arr.length-1){
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
//     for(let j= left;j<right;j++){
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




// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let insertionNumber = arr[i]
//         let j= i-1
//         while(j>=0 && arr[j] > insertionNumber){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = insertionNumber
//     }

// }
// let arr = [6,5,4,3,2,1]
// insertionSort(arr)
// console.log(arr);


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
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
//     }
// }
// let arr= [6,5,4,3,2,1]
// selectionSort(arr)
// console.log(arr);



// class stack{
//     constructor(){
//         this.element = []
//     }
//     push(data){
//         this.element.push(data)
//     }
//     pop(){
//         return this.element.pop()
//     }
//     peek(){
//         return this.element[this.element.length-1]
//     }
//     largest(){
//         let largest = this.element[0]
//         for(let i=1;i<this.element.length;i++){
//             if(largest<this.element[i]){
//                 largest = this.element[i]
//             }
//         }
//         return largest
//     }
//     dups(){
//         let uniqarr = []
//         for(let i=0;i<this.element.length-1;i++){
//             for(let j=i+1;j<this.element.length;j++){
//                 if(this.element[i] === this.element[j]){
//                     uniqarr.push(this.element[i])
//                 }
//             }
//         }
//         return uniqarr
        
//     }
//     removeDup(){
//         for(let i=0;i<this.element.length-1;i++){
//             for(let j=i+1 ;j<this.element.length;j++){
//                 if(this.element[i] === this.element[j]){
//                     this.element.splice(j, 1);
//                     j--;
//                 }
//             }
//         }
//     }
//     print(){
//         console.log(this.element);
//     }
// }
// const st = new stack()
// st.push(10)
// st.push(20)
// st.push(30)
// st.push(20)
// st.push(10)
// st.print()
// console.log(st.dups());
// st.removeDup()
// st.print()


