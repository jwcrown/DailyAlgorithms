function SwapPairs(arr){
    for (var i = 0; i < arr.length; i +=2){
        if (i == arr.length - 1){//checking if odd pair in array
            return arr;//
        }
        var temp = arr[i];//swapping pairs
        arr[i] = arr[i + 1];
        arr[i +1] = temp;
    }
    return arr;
}

console.log(SwapPairs([1,2,"foo",4,5,"hi",7]))