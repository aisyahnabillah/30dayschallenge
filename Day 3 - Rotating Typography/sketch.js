let sentenceOriginal = "HELLO";
let sentence = "";
let texts = []; let num = 8;
let rInc = 25; let r0 = 30;

let font;

function preload() {
  font = loadFont("fonts/LexendDecaRegular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  for (let i=0; i<num; i++) {
    sentence = sentence.concat(sentenceOriginal);
    let r = r0 + rInc * (i + 1);
    let dir; 
    if (i % 2 == 0) {
      dir = 1;
    } else {
      dir = -1;
    }
    let angleInc = 90 / (i+1);
    let a = 255 - (255 / num * i);
    let s = (i + 1) * 6;
    texts[i] = new Type(sentence, r, dir, angleInc, a, s);
  }
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0, 0, 100);
  translate(width/2, height/2);
  
  for (let i=0; i<num; i++) {
    texts[i].update();
    texts[i].display();
  }
  
  
}