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
//     remove(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samKey = bucket.find(item => item[0] === key)
//             if (samKey) {
//                 bucket.splice(bucket.indexOf(samKey), 1)
//             }
//         }
//     }
//     reverse(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samKey = bucket.find(item => item[0] === key)
//             if (samKey) {
//                 return String(samKey[1]).split('').reverse().join('')
//             }
//         }
//     }
//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }
// const table = new hashTable(10)
// table.set("name", "najil")
// table.set("week", 14)
// table.set("week", 18)
// table.print()
// console.log(table.reverse("week"));



// class stack {
//     constructor() {
//         this.elements = []
//     }
//     push(data) {
//         this.elements.push(data)
//     }
//     pop() {
//         return this.elements.pop()
//     }
//     peek() {
//         return this.elements[this.elements.length - 1]
//     }
//     paranthisis(str) {
//         let stack = []
//         for (let char of str) {
//             if (char === "(" || char === "{" || char === "[") {
//                 stack.push(char)
//             } else {
//                 let opposite = stack.pop()
//                 if ((char === ")" && opposite !== "(") || (char === "}" && opposite !== "{") || (char === "]" && opposite === "[") || char === undefined) {
//                     return false
//                 }
//             }
//         }
//         return stack.length === 0
//     }
//     removeDup() {
//         for (let i = 0; i < this.elements.length - 1; i++) {
//             for (let j = i + 1; j < this.elements.length; j++) {
//                 if (this.elements[i] === this.elements[j]) {
//                     this.elements.splice(j, 1)
//                     j--
//                 }
//             }
//         }
//     }
//     longestRepeatingSubstring(str) {
//         let longestSubstring = '';
//         for (let i = 0; i < str.length; i++) {
//             for (let j = i + 1; j < str.length; j++) {
//                 let substring = str.substring(i, j);
//                 if (str.indexOf(substring, j) !== -1 && substring.length > longestSubstring.length) {
//                     longestSubstring = substring;
//                 }
//             }
//         }
//         return longestSubstring;
//     }
//     print() {
//         console.log(this.elements);
//     }
// }
// const st = new stack()
// st.push(10)
// st.push(70)
// st.push(10)
// st.push(20)
// st.push(30)
// st.push(100)
// st.print()
// st.removeDup()
// console.log(st.longestRepeatingSubstring("aajgjardfaaabbbbbbbbbbbbfrdaaaaaaa"));


