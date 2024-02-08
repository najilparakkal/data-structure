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
//         const bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const sameKey = bucket.find(item => item[0] === value)
//             if (sameKey) {
//                 sameKey[1] = [value]
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }
//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKey = bucket.find(item => item[0] === key)
//             if (sameKey) {
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }
//     reverse(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKey = bucket.find(item => item[0] === key)
//             if (sameKey) {
//                 return String(sameKey[1]).split("").reverse().join("")
//             }
//         }
//         return undefined
//     }
//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKey = bucket.find(item => item[0] === key)
//             if (sameKey) {
//                 bucket.splice(bucket.indexOf(sameKey), 1)
//             }
//         }
//     }
//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i])
//                 console.log(i, this.table[i]);
//         }
//     }
// }
// const table = new hashTable(10)
// table.set('name', 'najil')
// table.set('week', 14)
// table.set('name', 'sahal')
// table.print()
// console.log(table.reverse("name"));


class stack{
    constructor(){
        this.element = []
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
    validParanthisis(str){
        let stack = []
        for(let char of str){
            if(char === '{' || char ==='[' || char ==='('){
                stack.push(char)
            }else{
                let opposit = stack.pop()
                if((char ==="}" && opposit !=="{") || (char ==="]" && opposit!== "[") || (char ===")" && opposit !== "(")){
                    return false
                }
            }
        }
        return stack.length === 0
    }
    unique(){
        for(let i=0;i<this.element.length;i++){
            for(let j=i+1;j<this.element.length;j++){
                if(this.element[i] === this.element[j]){
                    this.element.splice(j,1)
                    j--
                }
            }
        }
    }
    duplicats(){
        let dups = []
        for(let i=0;i<this.element.length;i++){
            for(let j=i+1;j<this.element.length;j++){
                if(this.element[i] === this.element[j]){
                    dups.push(this.element[i])
                }
            }
        }
        return dups
    }
    min(){
        let min = this.element[0]
        for(let i=1;i<this.element.length;i++){
                if(this.element[i]<min){
                    min = this.element[i]
                }
        }
        return min
    }
    
}