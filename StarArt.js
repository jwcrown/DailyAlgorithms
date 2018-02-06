function DrawLeftStars(stars, char){//staring from the left
    var str = "|";
    for (var i = 1; i <= 75; i++){
        if (i <= stars){
            str += char;
        }
        else{
            str += " ";
        }
    }
    str += '|'
    return str;
}

for(let i = 0; i < 50; i++){
    console.log(DrawLeftStars(i,"*"))
}


function DrawRightStars(stars, char){//Starting from the right
    var str = "|";
    for (var i = 1; i <= 75; i++){
        if (i > 75 - stars){
            str += char;
        }
        else{
            str += " ";
        }
    }
    str += '|'
    return str;
}

for(let i = 0; i < 50; i++){
    console.log(DrawRightStars(i,"*"))
}

function DrawCenterStars(stars, char){//Starting from the center
    var str = "|";
    for (var i = 1; i <= 75; i++){
        if (i > 38 - Math.floor(stars/2) && i < 38 + Math.ceil(stars/2)){//if odd extra value goes to right of center
            str += char;
        }
        else{
            str += " ";
        }
    }
    str += '|'
    return str;
}

for(let i = 0; i < 50; i++){
    console.log(DrawCenterStars(i,"*"))
}
