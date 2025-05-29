
let r = Math.random() * 255;
let v = Math.random() * 255;
let b = Math.random() * 255;

class Bouncy {
  constructor(size, posX, posY, vitX, vitY) {
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.vitX = vitX;
    this.vitY = vitY;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  bouger() {
    this.posX += this.vitX;
    this.posY += this.vitY;
  }

  rebondir() {
    let rebondi = false;

    if (this.posX + this.size > width || this.posX < 0) {
      this.vitX *= -1;
      rebondi = true;
    }
    if (this.posY + this.size > height || this.posY < 0) {
      this.vitY *= -1;
      rebondi = true;
    }

    if (rebondi) {
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
  }

  afficher() {
    fill(this.r, this.g, this.b);
    stroke(0);
    square(this.posX, this.posY, this.size);
    noStroke();
    ellipseMode(CORNER);

  fill(255)
circle(this.posX+5, this.posY+5, 4-10);
  }

  update() {
    this.bouger();
    this.rebondir();
    this.afficher();
  }
}

let mesBouncies = [];

function setup() {
  createCanvas(400, 400);
  frameRate(120);
  for (let i = 0; i < 3000; i++) {
    mesBouncies[i] = new Bouncy(16, 200, 200, random(-2, 2), random(-2, 2));
  }
}

function draw() {

  for (let i = 0; i < mesBouncies.length; i++) {
    mesBouncies[i].update();
  }
}
