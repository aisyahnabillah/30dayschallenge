// Matter.js variables
const { Engine, Bodies, Composite, Mouse, MouseConstraint } = Matter;
let engine, mouse, mouseConstraint;
let boxes = [];
let s = 20;
let t, b, l, r;
let boundarySize = 20;

// Image variables
let img, bg;
let cols, rows;
let gridSize = 20;

function preload() {
  img = loadImage("heart.png");
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  engine = Engine.create();
  engine.world.gravity.y = 0;

  mouse = Mouse.create(document.body);
  mouseConstraint = MouseConstraint.create(engine, mouse);
  Composite.add(engine.world, mouseConstraint);

  t = new Boundary(width / 2, -boundarySize / 2, width, boundarySize);
  b = new Boundary(width / 2, height + boundarySize / 2, width, boundarySize);
  r = new Boundary(-boundarySize / 2, height / 2, boundarySize, height);
  l = new Boundary(width + boundarySize / 2, height / 2, boundarySize, height);

  let imgWidth = 525;
  let imgHeight = 475;
  let xOffset = (width - imgWidth) / 2;
  let yOffset = (height - imgHeight) / 2;

  cols = floor(imgWidth / gridSize);
  rows = floor(imgHeight / gridSize);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let region = img.get(i * gridSize, j * gridSize, gridSize, gridSize);
      region.loadPixels();

      let isTransparent = true;
      for (let k = 0; k < region.pixels.length; k += 4) {
        if (region.pixels[k + 3] > 0) {
          isTransparent = false;
          break;
        }
      }

      if (!isTransparent) {
        let x = xOffset + i * gridSize + gridSize / 2;
        let y = yOffset + j * gridSize + gridSize / 2;
        boxes.push(new Rect(x, y, s, s, region.pixels));
      }
    }
  }
}


function draw() {
  background(220);
  Engine.update(engine);
  image(bg, 0, 0, width, height);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
