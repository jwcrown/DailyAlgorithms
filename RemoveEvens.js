function RemoveEven(arr) {
    let remove = function (idx) {//function used to remove at given idx
        for (let i = idx; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length--;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 0) {
            remove(i);
            i--;
        }
    }
    return arr;
}

/**
 * 
 * @param {Array<String>} arr 
 */
function test(arr) {
    const swap = (i, j) => {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 == 0) {
            swap(i, arr.length - 1);
            arr.length--;
        }
    }
}

let temp = ['123', '12', '12345'];
test(temp);
console.log(temp);
console.log(RemoveEven(["lalala", "Josh", ".", "12", "Crown", "foo"]))