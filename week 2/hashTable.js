
    class hashTable{
        constructor(size){
            this.table = new Array(size)
            this.size = size
        }
        hash(key){
            let total = 0;
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
                const samkey = bucket.find(item => item[0] === value)
                if(samkey){
                    samkey[1] = [value]
                }else{
                    bucket.push([key,value])
                }
            }
        }
        get(key) {
            const index = this.hash(key);
            const bucket = this.table[index];
            let items = []
            if(bucket){
               for(let item of bucket){
                items.push(item[1])
               }
            }
            return items.length >0 ? items:undefined
        }
        reverse(key){
            const index = this.hash(key)
            const bucket = this.table[index]
            if(bucket){
                const samkey = bucket.find(item => item [0] === key)
                if(samkey){
                    return samkey[1]=String(samkey[1]).split("").reverse().join("")
                }
            }
        }
        remove(key){
            const index = this.hash(key)
            const bucket = this.table[index]
            if(bucket){
                const samkey = bucket.find(item => item [0] === key)
                if(samkey){
                    return bucket.splice(bucket.indexOf(samkey),1)
                }
            }
        }
        print(){
            for(let i=0;i<this.table.length;i++){
                if(this.table[i] ){
                    console.log(i,this.table[i]);
                }
            }
        }
    }
    const table = new hashTable(10)
    table.set("name","najil")
    table.set("week",14)
    table.set("BCE",133)
    table.set("BCE",144)
    
    table.print()
    console.log(table.get("BCE"));
    console.log(table.reverse("name"));
    

