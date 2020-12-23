
let width = 600;
let height = 600;
let rows = 30;
let columns = 30;
let depth = 30;
let generation = 0;
let randomColor;

function setup() {
    createCanvas(width, height);
    
    noStroke();
    fill(0);
    background(0);

    for (let k = 0; k < depth; k++) {
        for (let i = 0; i < rows - 1; i++) {
            for (let j = 0; j < columns - 1; j++) {
                    randomColor = random(0, 255);
                    fill(randomColor, map(k, 0, 30, 255, 128));
                    circle((i + 1) * 20, (j + 1) * 20, 30);
            }
        }
    }
}