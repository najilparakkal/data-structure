
function palindrom(str){
    if(str.length <=1){
        return true
    }else if(str[0] !== str[str.length-1]){
        return false
    }else {
        return palindrom(str.slice(1,-1))
    }
}
console.log(palindrom("MalayalaM"));

function fabonacci(n){
    if(n<=1){
        return n
    }else{
        return fabonacci(n-1)+fabonacci(n-2)
    }
}
console.log(fabonacci(6));

function reverse(str){
    if(str === ""){
        return ""
    }else{
        return reverse(str.substr(1))+str[0]
    }
}
console.log(reverse("najil"));

opfunction factorial(n){
    if(n<=1){
        return n
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5));

let str = [1,2,3,4,5,6];
let reverse =[]
for (let i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i])
}
console.log(reverse);

