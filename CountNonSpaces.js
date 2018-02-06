function CountNonSpaces(str){
    var withoutSpace = str.replace(/ /g,"");//goes through string and removes spaces
    return withoutSpace.length;//check length of string without spaces
}

console.log(CountNonSpaces("f b fc"))