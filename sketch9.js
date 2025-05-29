let offset = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  if (mouseIsPressed) {
    // Dessiner la ligne originale
    line(pmouseX, pmouseY, mouseX, mouseY); 
    strokeWeight(4);

    // Déplacer la ligne parallèle
    line(pmouseX + offset, pmouseY, mouseX + offset, mouseY); 
      strokeWeight(10);
  }
}