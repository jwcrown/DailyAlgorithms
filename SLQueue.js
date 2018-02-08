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
    while (runner1 && runner2){//compares both queues nodes and returns false if not a match
        if (runner1.val != runner2.val){
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    if (!runner1 && !runner2){//both queues should finish at same time if matching
        return true;
    }
    return false;//queues did not finish at same time

}

function removeMinimum(queue){
    if (!queue.head){
        return false;
    }
    var runner = queue.head;
    var min = queue.head;
    var parent = null;//parent of current minimum
    while (runner.next){
        if (runner.next.val <= min.val){//looks ahead one and compares to min
            min = runner.next;
            parent = runner;//updating parent to one before min
        }
        runner = runner.next;//iterates through queue
    }
    if(!parent){//for case when min is first node
        queue.head = queue.head.next;
        if (queue.tail == min){//updates tail if last node was removed
            queue.tail = parent;
        }
    }
    else{
        parent.next = parent.next.next;
        if (queue.tail == min){//updates tail if last node was removed
            queue.tail = parent;
        }
    }
    return min.val;
}

var myQueue1 = new SLQueue();
myQueue1.enqueue(11);
myQueue1.enqueue(1);
myQueue1.enqueue(2);
myQueue1.enqueue(2);
myQueue1.enqueue(1);

console.log(removeMinimum(myQueue1))
console.log(myQueue1.queueSize());
console.log(myQueue1)
