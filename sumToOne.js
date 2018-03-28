function sumToOne(num){
    var sum = 0;
    while(num > 9){
        while(num > 9){
            sum += num % 10
            num = Math.floor(num/10);
        }
        sum += num % 10
        num = sum;
        sum = 0;
    }
    return num
}

console.log(sumToOne(13))