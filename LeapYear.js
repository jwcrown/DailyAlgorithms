function LeapYear(year){
    if (year % 4 === 0){// is leap year
        if (year % 100 === 0){//unless divisible by 100
            if (year % 400 === 0){//unless divisible by 400
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

console.log(LeapYear(2020));