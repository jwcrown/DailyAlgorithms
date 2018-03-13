function FloodFill(canvas2D, startXY, newColor, oldColor = canvas2D[startXY[0]][startXY[1]]){
    var y = startXY[0];
    var x = startXY[1];
    if (y < 0 || y > canvas2D.length - 1){
        return;
    }
    if (x < 0 || x > canvas2D[y].length - 1){
        return;
    }
    if (canvas2D[y][x] == oldColor){
        canvas2D[y][x] = newColor;
        FloodFill(canvas2D, [y + 1, x], newColor, oldColor);
        FloodFill(canvas2D, [y - 1, x], newColor, oldColor);
        FloodFill(canvas2D, [y, x + 1], newColor, oldColor);
        FloodFill(canvas2D, [y, x - 1], newColor, oldColor); 
    }
    return canvas2D
}

console.log(FloodFill([ [2,3,4,3,4],
                        [1,3,1,2,4],
                        [4,3,3,3,4],
                        [4,2,3,3,1],
                        [3,2,2,3,2]], [0,4], 1))
