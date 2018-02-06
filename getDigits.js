function getDigits(str){
    number = '';
    for (var i = 0; i < str.length; i ++){
        if (!isNaN(str[i])){//checking if is a number
            number += str[i];//adding it to string
        }
    }
    return parseInt(number);//changing string to number
}

console.log(getDigits("0w23hhh4b67d87"))