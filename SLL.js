function Node(val){
    this.val = val;
    this.next = null;
}

function SSL(){
    this.head = null;

    //methods for linked list
    this.addFront = function(val){
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    this.contains = function(val){
        if (!this.head){
            return false;
        }
        var runner = this.head;
        while (runner){
            if (runner.val == val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    this.removeFront = function(){
        if (!this.head){
            return;
        }
        var temp = this.head;
        this.head = this.head.next;
        return temp;
    }
}

var mySSL = new SSL();
mySSL.addFront(2);
mySSL.addFront(3);
mySSL.addFront(50);
mySSL.addFront(13);
mySSL.addFront(9);
console.log(mySSL.contains(9));
mySSL.removeFront();
mySSL.removeFront();
console.log(mySSL.contains(9));
console.log(mySSL);