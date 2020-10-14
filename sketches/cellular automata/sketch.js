
function make2DArray(cols, rows){
    let array = new Array(cols);
    for (let i = 0; i < array.length; i++){
        array[i] = new Array(rows);
    }
    return array;

}

let grid;
let cols;
let rows;
let cellSize = 10;

function setup(){
	createCanvas(600, 600);
    
    cols = width / cellSize;
    rows = height / cellSize;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            grid[i][j] = floor(random(2));
        }
    }

}

function draw(){

    background(255);
    noStroke();

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){

            if (grid[i][j] == 1){
                fill(0);
                square(i * cellSize, j * cellSize, cellSize);
            }

        } 
    }

    let next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){

            let state = grid[i][j];

            let neighbors = countNeighbors(grid, i, j);

            if (state == 0 && neighbors == 3) {
                next[i][j] = 1; 
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }

        } 
    }

    grid = next;

    

}

function countNeighbors(grid, x, y){
    let sum = 0;
    for (let i = -1; i < 2; i++){
        for (let j = -1; j < 2; j++){

            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];

        }
    }

    sum -= grid[x][y];
    return sum;
    
}