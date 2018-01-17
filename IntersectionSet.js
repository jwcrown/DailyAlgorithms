function IntersectionSet(arr1, arr2){
    let obj = {};
    let newarr = [];
    for (var x = 0; x< arr1.length; x++){
        if (!obj[arr1[x]]){
            obj[arr1[x]] = 1;
        }
        else{
            obj[arr1[x]] += 1;
        }
    }
    for (var y = 0; y < arr2.length; y ++){
        if (obj[arr2[y]] >= 1){
            newarr.push(arr2[y]);
            obj[arr2[y]] -= 1;
        }
    }
    return newarr;
}

console.log(IntersectionSet([1,2,2,3,4,6,2], [2,6,7,7,6,1,2]))