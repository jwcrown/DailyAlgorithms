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

    this.displayQueue = function(){
        if (!this.head){
            return null;
        }
        var list = "";
        var runner = this.head;
        while (runner){
            list += runner.val + " => ";
            runner = runner.next;
        }
        return list;
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

function interleaveQueue(queue){
    if (!queue.head){
        return null;
    }
    var count = 1;
    var runner = queue.head.next;
    var weave = queue.head.next;
    while (runner){//finds length of queue
        count++;
        if (count % 2 == 1){
            weave = weave.next;//moves at half the rate of runner to find middle of queue
        }
        runner = runner.next;//iterates through queue
    }
    runner = queue.head;//reset for swapping for loop
    var temp1 = null;
    var temp2 = null;
    for (var i = 0; i < Math.ceil(count / 2); i++){
        temp1 = runner.next;//saves runner pointer before being changed
        runner.next = weave;
        if (!runner.next){//updates tail if needed
            queue.tail = runner;
        }
        runner = temp1;
        if (i + 1 < Math.ceil(count / 2)){
            temp2 = weave.next;//saves weave pointer before being changed
            weave.next = temp1;
            weave = temp2;
        }
    }
    return queue;
}

var myQueue1 = new SLQueue();
myQueue1.enqueue(1);
myQueue1.enqueue(2);
myQueue1.enqueue(3);
myQueue1.enqueue(4);
myQueue1.enqueue(5);
console.log(myQueue1.displayQueue());
interleaveQueue(myQueue1);
console.log(myQueue1.displayQueue());
console.log(myQueue1);
