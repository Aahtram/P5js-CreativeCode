function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); 
}

function draw() {

  fill(random(255), random(255), random(255), 180); 
  noStroke();


  circle(random(width), random(height), random(10, 80));
  circle(random(width), random(height), random(20, 60));
}