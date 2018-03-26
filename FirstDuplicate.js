function firstDuplicate(a) {
    var duplicteTracker = {};
    for (var idx = 0; idx < a.length; idx++){
        if (duplicteTracker[a[idx]] == 1){
            return a[idx];
        }
        duplicteTracker[a[idx]] = 1;
    }
    return -1;
}