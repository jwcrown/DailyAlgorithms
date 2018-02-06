function MinToFront(arr){
    var min = 0;//idx where min is at
    for (var i = 1; i < arr.length; i ++){
        if (arr[i] < arr[min]){
            min = i;
        }
    }
    var temp = arr[min];
    for (var i = min; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}

console.log(MinToFront([4,2,5,3,1]));