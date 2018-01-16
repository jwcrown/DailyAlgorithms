function Union(arr1, arr2){
    var arr3 = arr1.concat(arr2);
    var newarr = [];
    var counter = 0;
    for (var i = 0; i < arr3.length; i ++){
        if (newarr.length == 0){
            newarr.push(arr3[0]);
        }
        var cond = true;
        for (var k = 0; k < newarr.length; k++){
            if (arr3[i] == newarr[k]){
                cond = false;
            }
        }
        if (cond == true){
            newarr.push(arr3[i])
        }
    }
    return newarr;
}

console.log(Union([2,2,4,1], [4,2,3,3,1,6,7]));