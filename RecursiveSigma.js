function recursiveSigma(sigmaNum){
    sigmaNum = Math.floor(sigmaNum);
    if(sigmaNum < 1){
        return 0;
    }
    if(sigmaNum == 1){
        return sigmaNum;
    }
    return sigmaNum + recursiveSigma(sigmaNum - 1);
}
console.log(recursiveSigma(5));