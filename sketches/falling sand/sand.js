class Sand extends Particle {

    constructor(x, y) {
        super(x, y);
        this.vx = 0;
        this.vy = 1;
        this.type = "SAND";
    }

    update() {

        next[this.x][this.y] = new Air(this.x, this.y);

        if (getCellType(this.x, this.y + this.vy) == "AIR") {
            this.y++;
        } else if (getCellType(this.x - 1, this.y + this.vy) == "AIR" && getCellType(this.x + 1, this.y + this.vy) == "AIR") {
            if (generation % 2 == 0) {
                this.x--;
            } else {
                this.x++;
            }
            this.y++;
        } else if (getCellType(this.x - 1, this.y + this.vy) == "AIR") {
            this.x--;
            this.y++;
        } else if (getCellType(this.x + 1, this.y + this.vy) == "AIR") { 
            this.x++;
            this.y++;
        }

        next[this.x][this.y] = this;

    }

    draw() {
        fill(190, 150 ,120);
        square(this.x * cellSize, this.y * cellSize, cellSize);
    }

}