function QuickSort(arr, start = 0, end = arr.length - 1){
    if (arr.length > 1){
        let pivot = partition(arr, start, end);
        if (start < pivot - 1){
            QuickSort(arr, start, pivot -1);
        }
        if (pivot < end){
            QuickSort(arr, pivot + 1, end);
        }
    }
    return arr;
}

function partition(arr, start = 0, end = arr.length -1){
    let front = start;
    let back = end;
    for (let i = start; i <= end; i++){
        if (arr[i] <= arr[back]){
            swap(arr, i, front);
            front++;
        }
    }
    return front - 1;
}


function swap(arr, x, y){
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

console.log(QuickSort([11,6,1,100,5,41]));

