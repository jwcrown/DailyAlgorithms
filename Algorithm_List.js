//CHAPTER 2 - FUNDAMENTALS, PART II
    //ADD EACH DIGIT TOGETHER UNTIL LEFT WITH SINGLE DIGIT
    function numToOne(num){
        var sum = 0;
        while(num !==0 || sum > 9){
                sum = sum + num % 10;
                num = Math.floor(num / 10);
                if(num == 0 && sum > 9){
                    num = sum;
                    sum = 0
                }
        }
        return sum;
    }

//CHAPTER 3 - ARRAYS
    // ADD NEW VALUE TO FRONT OF ARRAY
        function PushFront(arr, val){
            arr.push(1);
            for(var i = arr.length - 1; i > 0; i--){
                arr[i] = arr[i -1];
            }
            arr[0] = val;
        }
    // REMOVE FIRST VALUE FROM ARRAY
        function PopFront(arr){
            for(var i = 0; i < arr.length - 1; i++){
                arr[i] = arr [i +1];
            }
            arr.pop();
            return arr;
        }

    // INSERT A VALUE AT A GIVEN INDEX INTO AN ARRAY
        function insertAt(arr, idx, val){
            if(idx === arr.length){
                arr.push(val);
            }
            else{
                arr.push()
                for(var i = arr.length - 2; i >= idx; i--){
                    arr[i + 1] = arr[i];
                }
                arr[idx] = val;
            }
            return arr;
        }

    // REMOVE THE VALUE AT GIVEN INDEX FROM AN ARRAY
        function removeAt(arr, idx){
            if(idx == arr.length - 1){
                arr.pop();
            }
            else{
                for(var i = idx; i < arr.length - 1; i++){
                    arr[i] = arr[i + 1];
                }
                arr.pop();
            }
            return arr;
        }

    // REMOVING ALL DUPLICATES IN ARRAY
        function RemoveDupes(arr){
            var newarr = []
            for(var i = 0; i < arr.length; i ++){
                if(arr[i] !== arr[i - 1]){
                    newarr.push(arr[i]);
                }
            }
            return newarr;
        } //ONLY WORKS IF ARRAY VALUES ARE IN ORDER

    // REVERSING AN ARRAY
        function rev(arr){
            for(var i = 0; i < arr.length/2; i++){
                var temp = array[i];
                array[i] = array[arr.length - 1- i];
                array[arr.length -1 - 1] = temp;
            }
            return array;
        }

    // DOUBLE A GIVEN ARRAY SO THAT THE DUPLICATES SIT NEXT TO EACH OTHER
        function doubleTrouble(arr){
            arr.length *= 2;
            for(var i = arr.length -1; i > 0; i -= 2){
                arr[i] = arr[0.5 * (i - 1)];
                arr[i -1] = arr[i];
            }
            return arr
        }

//CHAPTER 4 - STRINGS AND ASSOCIATIVE ARRAYS
    // REMOVE SPACES FROM STRING
        function RemoveSpaces(str){
            var newstr = "";
            for( var i = 0; i < str.length; i++){
                if(str[i !== " "]){
                    newstr+= str[i];
                }
            }
        }

    // MAKE ACRONYM
        function Acronym(str){
            var nestr = str[0];
            for( var i = 1; 1 < str.length; i++){
                if(str[i] == " "){
                    newstr += str[i + 1];
                }
            }
        }

    //TELL WHETHER THE PARENTHESES IN A STRING ARE VALID
        function validPar(str){
            var count = 0;
            for(var i = 0; i < str.length; i ++){
                if(str[i] == "("){
                    count++;
                }
                if(str[i] == ")"){
                    count--;
                }
                if(count < 0){
                    return false;
                }
            }
            return true;   
        }

    // CHECK IF A GIVEN STRING IS A PALINDROME
        function isPalindrome(str){
            var palindrome;
            for(var i = 0; i < str.length/2; i++){
                if(str[i] == str[str.length - i - 1]){
                    palindrome = true;
                    
                }
                else{
                    palindrome = false;
                    return palindrome;
                }

            }
            return palindrome;
        }

    // PRINT ALL THE KEYS OF A GIVEN OBJECT
        function PrintKeys(obj){
            for(k in obj){
                console.log(k);
            }
        }

    // PRINT ALL THE VALUES OF A GIVEN OBJECT
        function PrintVals(obj){
            for(k in obj){
                console.log(obj[k]);
            }
        }

    //RETURN COIN CHANGE
        function coinChange(num){
            var change = {
                            "q": 0,
                            "d": 0,
                            "n": 0,
                            "p": 0,
            }
            change["q"] = Math.floor(num/25);
            num = num % 25;
            change["d"] = Math.floor(num/10);
            num = num % 10;
            change["n"] = Math.floor(num/5);
            change["p"] = num % 5;
            return change;
        }    

    // TURN TWO ARRAYS INTO AN OBJECT
        function Zip(arr1, arr2){
            var obj = {}
            for(var i = 0; i < arr1.length; i++){
                obj[arr1[i]] = arr2[i];
            }
            return obj;
        }
        
    // TURN AN OBJECT INTO TWO ARRAYS
        function unZip(obj){
            var arr1 = [];
            var arr2 = [];
            for(k in obj){
                arr1.push(k);
                arr2.push(obj[k]);
            }
            console.log(arr1);
            console.log(arr2);
        }

//CHAPTER 10 - STRINGS, PART II
    
    //CREATE AN ARRAY CONTAIING WORDS FROM GIVEN STRING
    function StringToWordArr(str){
        var newarr = [];
        var tempString = "";
        for (var i = 0; i < str.length; i++){
            if (str[i] != " "){
                tempString += str[i];
            }
            else{
                newarr.push(tempString);
                tempString = "";
            }
        }
        newarr.push(tempString);
        return newarr;
    }

    //REVERSE THE ORDER OF WORDS IN A STRING
    function ReverseWordOrder(str){
        var arr = StringToWordArr(str);
        var newstring = "";
        for (var i = arr.length - 1; i > 0; i--){
            newstring += arr[i] + " ";
        }
        return newstring
    }

    //FIND LONGEST WORD IN A STRING
    function LongestWord(str){
        var arr = StringToWordArr(str);
        var max = arr[0];
        for (var i = 0; i < arr.length; i++){
            if (arr[i].length > max){
                max = arr[i];
            }
        }
        return max; 
    }

    //ROTATE A GIVEN STRING TO THE RIGHT BY GIVEN AMOUNT
    function RotateString(string, num){
        if (num > string.length){
            num = num % string.length;
        }
        if (num == string.length || num == 0){
            return string;
        }
        var newstr = "";
        var frontNum = string.length - num;

        for (var i = frontNum; i < string.length; i++){
            newstr += string[i];
        }        
        for (var k = 0; k <= frontNum - 1; k++){
            newstr += string[k];
        }
        return newstr;
    }
    //CHECK IF GIVEN ARRAY HAS EVERY LETTER FROM A-Z
    function isPangram(str){
        var test = {};
        for (var i = 0; i < str.length; i++){
            test[str[i]] = true;
        }
        return obj.keys(test).length == 26;
    }

//CHAPTER 11 - TREES

    //ADD NODE TO BST
        function BSTAdd(val){
            if (this.root == null){
                this.root = new BTNode(val);
                return;
            }
            var walker = this.runner;
            while (walker.val != null){
                if (walker.val > val){
                    if (walker.left == null){
                        walker.left = new BTNode(val);
                        return;
                    }
                    walker = walker.left;
                }
                else if (walker.val <= val){
                    if (walker.right == null){
                        walker.right = new BTNode(val);
                        return;
                    }
                    walker = walker.right;
                }
            }
        }
    
    //RETURNS A BOOL ON WEHTER A VAL IS WITHIN BST
        function BSTContains(val){
            if (this.root == null){
                return false;
            }
            var walker = this.root;
            while (walker != null){
                if (walker.val == val){
                    return true;
                }
                else if (walker.val < val){
                    walker = walker.right;
                }
                else if (walker.val > val){
                    walker = walker.left;
                }
            }
            return false;
        }
    
    //FIND MIN VAL IN BST
        function BSTMin(){
            var walker = this.root;
            while (walker.left != null){
                walker = walker.left;
            }
            return walker.val;
        }
    
    //FIND MAX VAL IN BST
        function BSTMax(){
            var walker = this.root;
            while (walker.right != null){
                walker = walker.right;
            }
            return walker.val;
        }
// CHAPTER 12 - SORTS

    //SORT ARR BY SWAPPING FIRST INDEX WITH NEXT IF LESS THAN
        function BubbleSort(arr){
            var n = arr.length;
            while(n > 1){
                for (var i = 0; i < n - 1; i++){
                    if (arr[i] > arr[i + 1]){
                        var temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                    }
                }
                n--;
            }
            return arr;
        }

    //SORT ARR BY FINDING LOWEST VALUE AND SWAPPING WITH IDX ONE THEN CONTINUE TO NEXT IDX AND REPEAT
        function SelectionSort(arr){
            for (var i = 0; i < arr.length-1; i++){
                for (var k = i + 1; k < arr.length; k++){
                    if (arr[k] < arr[i]){
                        swap(k, i, arr);
                    }
                }
            }
            return arr;
        }
        
        function swap(x, y, arr){
            var temp = arr[x];
            arr[x] = arr[y];
            arr[y] = temp;
        }

    //PARTITION ARRAY WITH FIRST IDX VALUE IN PLACE
        function Partition(arr){
            swap(0, arr.length - 1, arr);
            var wall = -1;
            for (var i = 0; i < arr.length - 1; i++){
                if (arr[i] < arr[arr.length - 1]){
                    swap(i, wall + 1, arr);
                    wall++;
                }
            }
            swap(arr.length -1, wall + 1, arr);
            return arr;
        }

    //SORT AN ARRAY IN PLACE USING PARTITION
        function QuickSort(arr, start = 0, end = arr.length - 1){
            if (arr.length > 1){
                let pivot = Partition(arr, start, end);
                if (start < pivot - 1){
                    QuickSort(arr, start, pivot -1);
                }
                if (pivot < end){
                    QuickSort(arr, pivot + 1, end);
                }
            }
            return arr;
        }

// CHAPTER 13 - SETS AND PRIORITY QUEUES
    
    //GIVEN TWO ARRAYS RETURN AN ARRAY WITH ALL THE VALUES THAT HAVE A MATCH
        function IntersectionSet(arr1, arr2){
            let obj = {};
            let newarr = [];
            for (var x = 0; x< arr1.length; x++){
                if (!obj[arr1[x]]){
                    obj[arr1[x]] = 1;
                }
                else{
                    obj[arr1[x]] += 1;
                }
            }
            for (var y = 0; y < arr2.length; y ++){
                if (obj[arr2[y]] >= 1){
                    newarr.push(arr2[y]);
                    obj[arr2[y]] -= 1;
                }
            }
            return newarr;
        }

    //GIVEN TWO ARRAYS RETURN AN ARRAY WITH NO DUPLICATES
        function Union(arr1, arr2){
            var arr3 = arr1.concat(arr2);
            var newarr = [];
            var counter = 0;
            for (var i = 0; i < arr3.length; i ++){
                if (newarr.length == 0){
                    newarr.push(arr3[0]);
                }
                var cond = true;
                for (var k = 0; k < newarr.length; k++){
                    if (arr3[i] == newarr[k]){
                        cond = false;
                    }
                }
                if (cond == true){
                    newarr.push(arr3[i])
                }
            }
            return newarr;
        }

// ????
        
