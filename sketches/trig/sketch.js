
let a;
let b;
let r;
let vector;

function setup(){
	createCanvas(600, 600);

    vector = createVector(a, b);

}

function draw() {

    background(255);

    a = mouseX - width / 2;
    b = mouseY - height / 2;
    r = Math.sqrt((a * a) + (b * b));

    vector.x = a;
    vector.y = b;

    textSize(16);
    text("A: " + a, 0, 16);
    text("B: " + b, 0, 32);
    text("R: " + r, 0, 48);

    translate(width / 2, height / 2);

    stroke(0);
    line(0, 0, vector.x, vector.y);
    line(0, 0, a, 0);
    line(a, 0, a, b);

}
