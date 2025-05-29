function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
}

function draw() {
  
   fill(random(255), random(255), random(255), 180);
  circle(random(width / 2), random(height), random(10, 80));
  
  
  fill(random(255), random(255), random(255), 180);
  square(random(width / 2, width), random(height), random(10, 80));}

