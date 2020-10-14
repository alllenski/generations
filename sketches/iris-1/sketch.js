
function setup(){
	createCanvas(600, 600);
    background(255);

    translate(width / 2, height / 2);
    paint();
}

function paint(){

    // variables
    var eyeColor = color(random(0, 255), random(0, 255), random(0, 255));
    var innerColor = color(random(0, 255), random(0, 255), random(0, 255));
    var innerVectorMinLength = 50;
    var innerVectorMaxLength = 70;
    var blendVectorMinLength = 20;
    var blendVectorMaxLength = 140;
    var middleVectorMinLength = 40;
    var middleVectorMaxLength = 75;

    // whole iris
    fill(eyeColor);
    circle(0, 0, 300);

    // outer edge
    noFill();
    stroke(0, 0, 0);
    circle(0, 0, 300);

    // inner vectors
    for (i = 0; i < 4000; i++) {
        let v = p5.Vector.random2D();
        v.mult(random(innerVectorMinLength, innerVectorMaxLength));

        strokeWeight(2);
        stroke(innerColor, 32);
        line(0, 0, v.x, v.y);
    }

    // blend vectors
    for (i = 0; i < 2000; i++) {
        let v = p5.Vector.random2D();
        v.mult(random(blendVectorMinLength, blendVectorMaxLength));

        strokeWeight(2);
        stroke(lerpColor(innerColor, eyeColor, 0.50), 32);
        line(0, 0, v.x, v.y);
    }

    // middle vectors
    for (i = 0; i < 6000; i++) {
        let v = p5.Vector.random2D();
        v.mult(random(middleVectorMinLength, middleVectorMaxLength));

        push();
        translate(v);
        strokeWeight(2);
        stroke(0, 0, 0, 16);
        line(0, 0, v.x, v.y);
        pop();
    }
    
    // pupil blots
    for (i = 0; i < 2000; i++) {
        let v = p5.Vector.random2D();
        v.mult(random(0, 38));

        strokeWeight(2);
        stroke(0, 128);
        line(0, 0, v.x, v.y);
    }
    
    // pupil
    fill(0, 0, 0);
    circle(0, 0, 75);
    filter(BLUR, 1.1);

}