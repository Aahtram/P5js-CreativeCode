function setup() {
  createCanvas(windowWidth , windowHeight); 
}

function draw() {
  let weight = random(2, 16); 
  strokeWeight(weight); 
  
  if (mouseIsPressed || mouseIsPressed === false) {
    line(pmouseX, pmouseY, mouseX, mouseY); // Dessiner une ligne entre la position précédente de la souris et la position actuelle
  }
}
