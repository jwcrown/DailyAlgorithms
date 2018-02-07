function Node(val){
    this.val = val;
    this.next = null;
}

function SLQueue(){
    var head = null;
    var tail = null;

    //methods for SLQueue
    this.enqueue = function(val){
        if (!this.head){
            var newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            var newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    this.dequeue = function(){
        if (!this.head){
            return null;
        }
        var temp = this.head.val;
        this.head = this.head.next;
        return temp;
    }

    this.frontVal = function(){
        if (!this.head){
            return null;
        }
        return this.head.val;
    }
}

var myQueue = new SLQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.frontVal());