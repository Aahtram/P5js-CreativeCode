function setup() {
  createCanvas(600, 400);
  noLoop();

  for (let y = 0; y < height; y++) {
  
    stroke(lerpColor(color('#FFB6C1'), color(0, 0, 255), y / height)); 
    line(0, y, width, y); // Dessine la ligne horizontale pour chaque hauteur
  }

  // Dessin des montagnes
  stroke(0);
  for (let x = 0; x < width; x++) {
    let h = 100 + noise(x * 0.01) * (height - 100);
    line(x, height, x, height - h);
  }
}

//AIDE AVEC CHAT GPT