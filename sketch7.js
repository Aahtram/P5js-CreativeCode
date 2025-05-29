function setup() {
  createCanvas(windowWidth, windowHeight);
   strokeWeight(10);
}

function draw() {
  if (mouseIsPressed) {
    stroke(random(255), random(255), random(255));
    line(pmouseX, pmouseY, mouseX, mouseY); 
  }
}
