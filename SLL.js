function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
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
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        return temp;
    }

    this.frontVal = function(){
        if (!this.head){
            return null;
        }
        return this.head.val;
    }

    this.listLength = function(){
        if (!this.head){
            return null;
        }
        var count = 1;
        var runner = this.head;
        while (runner.next){
            count ++;
            runner = runner.next;
        }
        return count;
    }

    this.maxVal = function(){
        if (!this.head){
            return null;
        }
        var max = this.head.val;
        var runner = this.head.next;
        while (runner){
            if (max < runner.val){
                max = runner.val
            }
            runner = runner.next;
        }
        return max;
    }
}

var mySLL = new SLL();
mySLL.addFront(2);
mySLL.addFront(3);
mySLL.addFront(50);
mySLL.addFront(13);
mySLL.addFront(9);
console.log(mySLL.maxVal());
console.log(mySLL.listLength());
console.log(mySLL.contains(9));
mySLL.removeFront();
mySLL.removeFront();
console.log(mySLL.listLength());
console.log(mySLL.contains(9));
console.log(mySLL);
mySLL.removeFront();
console.log(mySLL.frontVal());
