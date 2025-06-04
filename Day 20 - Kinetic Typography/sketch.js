let font;
let points = [];
let r = 15; let angle = 0;

function preload() {
  font = loadFont("fonts/ROMANTIC.ttf");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints("Hello World!", 100, 300, 300, {
    sampleFactor:0.1,
    simplifyThreshold: 0
  });
  angleMode(DEGREES);
}

function draw() {
  background(220);
  for (let i=0; i<points.length; i++) {
    ellipse(points[i].x + r*sin(angle + i*25), points[i].y, 10, 10);
  }
  angle += 10;
  
}