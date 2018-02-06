function Factorial(num){
    factorial = 1;
    for (var i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial
}

console.log(Factorial(3));