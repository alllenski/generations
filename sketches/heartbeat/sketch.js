
var t = 0;

function setup(){
	createCanvas(600, 600);
}

function draw(){

    t += 0.005;

    background(0);

    translate(width / 2, height / 2);

    fill(237, 34, 93);
    stroke(255);
    strokeWeight(4);
    beginShape();

    for (var a = 0; a < TWO_PI; a += 0.01)
    {
        var b = map(t, 0, 1, 0, TWO_PI * 4);
        var r = map(sin(b), -1, 1, height/80, height/40);
        var x = r * 16 * pow(sin(a), 3);
        var y = -r * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
        vertex(x, y);
    }
    endShape();

}