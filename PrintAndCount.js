function PrintAndCount(){
    var count = 0;
    for (var i = 512; i <=4096; i++){
        if (i%5 === 0){
            console.log(i);
            count ++;//counting how many times I have printed
        }
    }
    return count
}

console.log(PrintAndCount());