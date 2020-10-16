class Air extends Particle {

    constructor(x, y) {
        super(x, y);
        this.vx = 0;
        this.vy = 0;
        this.type = "AIR";
    }

    update() {

        if (!next[this.x][this.y]) {
            next[this.x][this.y] = this;
        }


    }

    draw() {
        fill(255);
        square(this.x * cellSize, this.y * cellSize, cellSize);
    }

}