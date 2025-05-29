function setup() {
  createCanvas(500, 500); 
  noStroke();
}

function draw() {
 
  
  fill(255, 0, 0, 40); 
  ellipse(200, 200, 200, 200);
  

  fill(0, 255, 0, 40); 
  ellipse(300, 200, 200, 200); 
    

  fill(0, 0, 255, 40); 
  ellipse(250, 300, 200, 200); 


  if (mouseIsPressed) {
    stroke(0);
    line(pmouseX, pmouseY, mouseX, mouseY); 
     strokeWeight(3);
  }
}
