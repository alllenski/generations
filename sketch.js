

function setup(){
	createCanvas(600, 600);
    background(255);

    translate(width / 2, height / 2);
    paint();
}

function draw(){
    
    
}

function paint(){

    // whole iris
    fill(160, 0, 0);
    circle(0, 0, 300);

    // pupil blots
    for (i = 0; i < 2000; i++) {
        let v = p5.Vector.random2D();
        v.mult(random(0, 40));

        strokeWeight(2);
        stroke(0, 128);
        line(0, 0, v.x, v.y);
    }

    // outer edge
    noFill();
    stroke(0, 0, 0);
    circle(0, 0, 300);

    // inner vectors
    for (i = 0; i < 4000; i++) {
        let v = p5.Vector.random2D();
        v.mult(random(50, 70));

        strokeWeight(2);
        stroke(128, 0, 0, 32);
        line(0, 0, v.x, v.y);
    }

    // middle vectors
    for (i = 0; i < 6000; i++) {
        let v = p5.Vector.random2D();
        v.mult(random(40, 75));

        push();
        translate(v);
        strokeWeight(2);
        stroke(0, 0, 0, 32);
        line(0, 0, v.x, v.y);
        pop();
    }
    // pupil
    fill(0, 0, 0);
    circle(0, 0, 75);

    filter(BLUR, 1.1);

}