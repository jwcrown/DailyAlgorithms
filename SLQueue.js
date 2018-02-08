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

    this.contains = function(val){
        if (!this.head){
            return null;
        }
        var runner = this.head;
        while (runner){//iterates through queue
            if (runner.val == val){//checking if each node equals value given
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    this.isEmpty = function(){
        if (!this.head){
            return true;
        }
        else{
            return false;
        }
    }

    this.queueSize = function(){
        if (!this.head){
            return null;
        }
        var runner = this.head.next;
        var size = 1;
        while (runner){
            size ++;
            runner = runner.next;
        }
        return size;
    }


}

function compareQueues(queue1, queue2){
    var runner1 = queue1.head;
    var runner2 = queue2.head;
    while (runner1 && runner2){
        if (runner1.val != runner2.val){
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    if (!runner1 && !runner2){
        return true;
    }
    return false;
}

var myQueue1 = new SLQueue();
myQueue1.enqueue(3);
myQueue1.enqueue(2);
var myQueue2 = new SLQueue();
myQueue2.enqueue(3);
myQueue2.enqueue(3);

console.log(compareQueues(myQueue1, myQueue2))
