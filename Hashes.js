function HashMap(capacity){
    this.capacity = capacity
    this.table = [];
    
    this.hasher = function(str){
        var sum = 0;
        for (var i = 0; i <str.length; i++){
            sum += str.charCodeAt(i);
        }
        sum %= 50;
        return sum;
    }

    this.addValue = function(arr, k, val){
        idx = this.hasher(k);
        for (var i = 0; i < arr.length; i++){}
        if (!arr[idx]){
            arr[idx] = []
        }
        arr[idx].push([k, val]);
    }

    this.findKey = function(k){
        idx = this.hasher(k);
        bucket = this.table[idx];
        for (let b of bucket){
            if(b[0] == k){
                return b[1];
            }
        }
        return null;
    }
}

var myHash = new HashMap();
// console.log(myHash)
myHash.addValue("cat", 30);
myHash.addValue("cat", 20);
myHash.addValue("pug", "woah");
myHash.addValue("hat", "yess");
console.log(myHash.findKey("hat"))
console.log(myHash.findKey("hat"))

