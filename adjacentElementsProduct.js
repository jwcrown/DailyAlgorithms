function adjacentElementsProduct(inputArray) {
    var max = inputArray[0]*inputArray[1];
    for (var idxOfArray = 1; idxOfArray < inputArray.length - 1; idxOfArray++){
        if (inputArray[idxOfArray]*inputArray[idxOfArray + 1] > max){
            max = inputArray[idxOfArray]*inputArray[idxOfArray + 1];
        }
    }
    return max;
}