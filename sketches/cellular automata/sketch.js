
function make2DArray(cols, rows){
    let array = new Array(cols);
    for (let i = 0; i < array.length; i++){
        array[i] = new Array(rows);
    }
    return array;

}

let grid;
let next;
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
            grid[i][j] = new Particle(i, j, floor(random(2)));
        }
    }

}

function draw(){

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){

            grid[i][j].update();

        } 
    }

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){

            grid[i][j].state = grid[i][j].nextState;

        } 
    }

    background(255);
    noStroke();

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){

            grid[i][j].draw();

        } 
    }

}

function countNeighbors(grid, x, y){
    let sum = 0;
    for (let i = -1; i < 2; i++){
        for (let j = -1; j < 2; j++){

            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row].state;

        }
    }

    sum -= grid[x][y].state;
    return sum;
    
}
