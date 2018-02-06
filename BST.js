function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BST(){
    this.root = null;

    this.add = function(val){
        if (this.root == null){
            this.root = new Node(val);
            return;
        }
        var walker = this.root;
        while (walker.val != null){
            if (walker.val > val){
                if (walker.left == null){
                    walker.left = new Node(val);
                    return;
                }
                walker = walker.left;
            }
            else if (walker.val <= val){
                if (walker.right == null){
                    walker.right = new Node(val);
                    return;
                }
                walker = walker.right;
            }
        }
    }
}

var myBST = new BST();
myBST.add(50);
myBST.add(25);
myBST.add(1);
myBST.add(56);
myBST.add(4);
myBST.add(160);
myBST.add(17);
myBST.add(100);
console.log(myBST);