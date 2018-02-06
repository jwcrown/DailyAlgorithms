function Sigma(num){
    sigma = 0;
    for (var i = 1; i <= num; i++){
        sigma += i;
    }
    return sigma
}

console.log(Sigma(6));