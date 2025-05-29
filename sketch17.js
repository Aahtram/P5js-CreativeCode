//AIDE AVEC CHATP GPT 

let taille = 2;
let tailleMax;

function setup() {
  createCanvas(600, 400);
  background(62,52,40);
  noFill();
  strokeWeight(3);

  // Taille max = moitié de la distance entre deux cercles voisins
  tailleMax = min(width / 2, height / 2) - 20;
}

function draw() {
  if (taille <= tailleMax) {
    
    stroke(random(100, 255), random(100, 200), random(150, 255), 150);
    circle(180, 100, taille);

   
    stroke(random(100, 100), random(100, 200), random(150, 255), 150);
    circle(width - 180, 100, taille);

    
    stroke(random(100, 255), random(100, 100), random(150, 255), 150);
    circle(180, height - 100, taille);

    
    stroke(random(100, 255), random(100, 200), random(150, 100), 150);
    circle(width - 180, height - 100, taille);

    taille += 1;
  }
}

