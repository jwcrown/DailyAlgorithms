// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    var runner = l;
    var string1 ="";
    var string2 ="";
    while (runner){
        string1 = string1 + runner.value;        
        string2 = runner.value + string2;
        runner = runner.next;
    }

    if (string1 == string2){
        return true;
    }
    return false;
}