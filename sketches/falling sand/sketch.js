
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
let generation = 0;
let cellSize = 10;

function setup(){
	createCanvas(600, 600);
    
    cols = width / cellSize;
    rows = height / cellSize;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            if(floor(random(2)) == 1) {
                grid[i][j] = new Sand(i, j);
            } else {
                grid[i][j] = new Air(i, j);
            }
            
        }
    }

}

function draw(){

    next = make2DArray(cols, rows); 

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){

            grid[i][j].update();

        } 
    }

    if (mouseIsPressed) {
        let x = floor(mouseX / cellSize);
        let y = floor(mouseY / cellSize);
        if(getCellType(x, y) == "AIR") {
            next[x][y] = new Sand(x, y);
        }
        
    }

    grid = next;

    generation++;    

    background(255);
    noStroke();

    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            grid[i][j].draw();

        } 
    }

}

function getCellType(x, y) {

    if (x < 0 || y < 0 || x > cols - 1 || y > rows - 1) {
        return "WALL";
    }

    return grid[x][y].type;
    
}
