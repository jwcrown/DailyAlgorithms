function selectionSort(arr){
    for (var i = 0; i < arr.length-1; i++){
        for (var k = i + 1; k < arr.length; k++){
            if (arr[k] < arr[i]){
                swap(k, i, arr);
            }
        }
    }
    return arr;
}

function swap(x, y, arr){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

console.log(selectionSort([2,4,5,3,1]));