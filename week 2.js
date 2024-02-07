// class hashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const samKey = bucket.find(item => item[0] === value)
//             if (samKey) {
//                 samKey[1] = [value]
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }
//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samKey = bucket.find(item => item[0] === key)
//             if (samKey) {
//                 return samKey[1]
//             }
//         }
//         return undefined
//     }
//     reverse(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samKey = bucket.find(item => item[0] === key)
//             if (samKey) {
//                 return String(samKey[1]).split("").reverse().join("")
//             }
//         }
//         return undefined
//     }
//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samKey = bucket.find(item => item[0] === key)
//             if (samKey) {
//                 return bucket.splice(bucket.indexOf(samKey), 1)
//             }
//         }
//     }
//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }
// const table = new hashTable (10)
// table.set("name","Najil")
// table.set("week" ,14)
// table.set("week",15)
// table.print()
// console.log(table.remove("name"));
// table.print()



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
//     secondMin(){
//         let min = this.element[0]
//         let secondMin = this.element[1]
//         if(min>secondMin){
//             [min,secondMin] = [secondMin,min]
//         }
//         for(let i=2;i<this.element.length;i++){
//             if(this.element[i]<min){
//                 secondMin = min
//                 min = this.element[i]
//             }else if(this.element[i] <secondMin && this.element[i] !== min){
//                 min = this.element[i]
//             }
//         }
//         return secondMin
//     }
//     paranthisis(str){
//         let stack = []
//         for(let char of str){
//             if(char ==="{" || char ==="(" || char ==="["){
//                 stack.push(char)
//             }else{
//                 let opposit = stack.pop()
//                 if((char === "}" && opposit !== "{") || (char ===")" && opposit!== "(") || (char === "]" && opposit !== "[") || char === undefined){
//                     return false
//                 }
//             }
//         }
//         return stack.length === 0
//     }
//     uniqu(){
//         let uniquearr =[]
//         for(let i=0;i<this.element.length-1;i++){
//             for(let j=i+1;j<this.element.length;j++)
//             if(this.element[i] === this.element[j]){
//                 uniquearr.push(this.element[i])
//             }
//         }
//         return uniquearr
//     }
//     removeDupes(){
//         for(let i=0;i<this.element.length-1;i++){
//             for(let j=i+1;j<this.element.length;j++){
//                 if(this.element[i] === this.element[j]){
//                     this.element.splice(j,1)
//                 j--
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
// st.push(30)
// st.push(3)
// st.push(100)
// st.push(50)
// st.push(10)
// st.print()
// console.log(st.secondMin("["));


