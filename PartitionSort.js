function Partition(arr){
    swap(0, arr.length - 1, arr);
    var wall = -1;
    for (var i = 0; i < arr.length - 1; i++){
        if (arr[i] < arr[arr.length - 1]){
            swap(i, wall + 1, arr);
            wall++;
        }
    }
    swap(arr.length -1, wall + 1, arr);
    return arr;
}

function swap(x, y, arr){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

console.log(Partition([5,10,2,3,9,4,1,7,6]))