class Particle {

    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.nextState = state;
    }

    update() {

        let neighbors = countNeighbors(grid, this.x, this.y);

        if (this.state == 0 && neighbors == 3) {
            this.nextState = 1; 
        } else if (this.state == 1 && (neighbors < 2 || neighbors > 3)) {
            this.nextState = 0;
        } else {
            this.nextState = this.state;
        }

    }

    draw() {
        if (this.state == 1){
            fill(0);
            square(this.x * cellSize, this.y * cellSize, cellSize);
        }
    }

}