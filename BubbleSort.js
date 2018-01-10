function BubbleSort(arr){
    var n = arr.length;
    while(n > 1){
        for (var i = 0; i < n - 1; i++){
            if (arr[i] > arr[i + 1]){
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        n--;
    }
    return arr;
}

console.log(BubbleSort([3,2,5,4,1]));