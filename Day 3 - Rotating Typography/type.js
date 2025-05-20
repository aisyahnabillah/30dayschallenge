class Type {
  constructor(sentence, r, dir, angleInc, a, s) {
    this.sentence = sentence;
    this.sentenceArray = this.sentence.split("");
    this.r = r; 
    this.dir = dir;
    this.angle = 0;
    
    this.x = this.r * cos(this.angle);
    this.y = this.r * sin(this.angle);
    
    this.amt = 0;
    this.min = 0;
    this.angleInc = angleInc;
    
    this.a = a;
    this.s = s;
  }
  
  update() {
    this.angle = this.min + easeInQuad(this.amt) * this.angleInc;
    
    if (this.amt > 1) {
      this.amt = 0;
      this.min += this.angleInc;
    } else {
      this.amt += 0.01;
    }
    
  }
  
  display() {
    noStroke();
    fill(255, this.a);
    textSize(this.s);
    textFont(font);
    
    push();
    rotate(this.dir * this.angle);
    for (let i=0; i<this.sentenceArray.length; i++) {
      push();
      let startingAngle = 360 / this.sentenceArray.length * i;
      rotate(startingAngle);
      text(this.sentenceArray[i], this.x, this.y);
      pop();
    }
    
    pop();
  }
}