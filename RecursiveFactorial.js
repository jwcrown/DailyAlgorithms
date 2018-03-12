function Factorial(num){
    num = Math.floor(num);
    if (num < 1){
        return 0;
    }
    if (num == 1){
        return 1;
    }
    return num * Factorial(num - 1);
}

console.log(Factorial(6.5));