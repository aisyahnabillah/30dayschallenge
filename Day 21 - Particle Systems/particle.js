class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = p5.Vector.random2D();
    this.acc.mult(0.05);
    
    this.life = 255;
    this.done = false;
    this.hueValue = 0;
  }
  
  update() {
    this.finished(); 
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.life -= 3;
    
    if (this.hueValue > 255) {
      this.hueValue = 0;
    }
    this.hueValue += 1;
  }
  
  display() {
    noStroke();
    fill(this.hueValue, 255, this.life);
    ellipse(this.pos.x, this.pos.y, 2, 2);
  }
  
  finished() {
    if (this.life < 0) {
      this.done = true;
    } else {
      this.done = false;
    }
  }
}