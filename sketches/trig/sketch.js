
let a = 0;
let b = 0;
let c = 0;
let angleA = 0;
let angleB = 0;
let angleC = 0;
let vector;

function setup(){
	createCanvas(600, 600);

    let aInput = select("#a-input");
    let bInput = select("#b-input");

    aInput.input(changeA);
    bInput.input(changeB);

    angleMode(DEGREES);

    vector = createVector(a, b);

}

function draw() {

    background(255);

    c = Math.sqrt((a * a) + (b * b));
    angleA = asin(a / c);
    angleB = asin(b / c);
    angleC = 90;

    vector.x = a;
    vector.y = b;

    textSize(16);
    text("a: " + a, 0, 16);
    text("b: " + b, 0, 32);
    text("c: " + c, 0, 48);
    text("A: " + angleA, 0, 64);
    text("B: " + angleB, 0, 80);
    text("C: " + angleC, 0, 96);

    translate(width / 2, height / 2);

    stroke(0);
    circle(0, 0, c * 2);
    line(0, 0, vector.x, -vector.y);
    line(0, 0, a, 0);
    line(a, 0, a, -b);

}

function changeA() {
    a = this.value();
}

function changeB() {
    b = this.value();
}