// class stack {
//     constructor() {
//         this.element = []
//     }
//     push(data) {
//         this.element.push(data)
//     }
//     pop() {
//         return this.element.pop()
//     }

//     validParanthisis(str) {
//         let stack = []
//         for (let char of str) {
//             if (char === "(" || char === "[" || char === "{") {
//                 stack.push(char)
//             } else {
//                 let oposite = stack.pop()
//                 if ((char === "}" && oposite !== "{") || (char === "]" && oposite !== "[") || (char === ")" && oposite !== "(") || oposite === undefined) {
//                     return false
//                 }
//             }
//         }
//         return stack.length === 0
//     }
//     getDups() {
//         let dups = []
//         for (let i = 0; i < this.element.length - 1; i++) {
//             for (let j = i + 1; j < this.element.length; j++) {
//                 if (this.element[i] === this.element[j]) {
//                     dups.push(this.element[i])
//                 }
//             }
//         }
//         return dups
//     }
//     removeDups() {
//         for (let i = 0; i < this.element.length - 1; i++) {
//             for (let j = i + 1; j < this.element.length; j++) {
//                 if (this.element[i] === this.element[j]) {
//                     this.element.splice(j, 1)
//                     j--
//                 }
//             }
//         }
//     }
//     peek() {
//         return this.element[this.element.length - 1]
//     }
//     print() {
//         console.log(this.element);
//     }
// }

// const st = new stack()
// st.push(10)
// st.push(10)
// st.push(120)
// st.push(40)
// st.push(30)

// st.print()
// st.removeDups()
// st.print()

class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total %this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const samkey = bucket.find(item=>item[0]=== value)
            if(samkey){
                samkey[1] = [value]
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const samkey = bucket.find(item=>item[0] === key)
            if(samkey){
                return samkey[1]
            }
        }
        return undefined
    }
    reverse(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const samkey = bucket.find(item=>item[0] === key)
            if(samkey){
                return String(samkey[1]).split("").reverse().join("")
            }
        }
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const table = new hashTable(10)
table.set("name","sahal")
table.set("week",15)
table.print()
console.log(table.reverse("name"));