function RemoveShorterStrings(arr, length){
    newarr = [];
    for (var i = 0; i < arr.length; i ++){
        if (arr[i].length >= length){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

const tester = (arr, length) => {
    const newArr = [];
    while(arr.length){
        const val = arr.pop();
        if (val.length >= length){
            newArr.push(val);
        }
    }
    return newArr;
}

console.log(tester(["dog", "goat", "hahaha"], 4))