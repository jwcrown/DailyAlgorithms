function rotateImage(a) {
    var col, row, tmp
    for (row = 0; row < a.length / 2; row++){
        for (col = row; col < a.length - row - 1; col++) {
            tmp = a[row][col]
            a[row][col] = a[a.length - col - 1][row]
            a[a.length - col - 1][row] = a[a.length - row - 1][a.length - col - 1]
            a[a.length - row - 1][a.length - col - 1] = a[col][a.length - row - 1]
            a[col][a.length - row - 1] = tmp
        }
    }
    return a
}

console.log(rotateImage([[1, 3, 5, 7],
                         [2, 6, 1, 3],
                         [4, 3, 2, 1],
                         [5, 7, 2, 1]]))