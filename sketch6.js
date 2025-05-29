function setup() {
  createCanvas(windowWidth, windowHeight);
   strokeWeight(5);}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY); 
  }
}