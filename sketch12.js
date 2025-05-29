function setup() {
  createCanvas(200, 200);
  background(0);
  stroke(255)
  strokeWeight(6);

  //A
  line(50, 150, 70, 50);  
  line(70, 50, 90, 150); 
  line(64, 100, 80, 110); 

  //B
  line(120, 50, 120, 150) ;              
  arc(120, 70, 40, 40, -HALF_PI, HALF_PI); 
  arc(120, 120, 40, 60, -HALF_PI, HALF_PI);  

}

//EXPLICATION DE CHAT GPT CAR AIDE POUR LE B :
//En p5.js, les angles sont souvent mesurés en radians (pas en degrés par défaut).
//Un cercle complet = TWO_PI radians = 2π ≈ 6.2832
//Un demi-cercle = PI radians = π ≈ 3.1416
//Un quart de cercle = HALF_PI = π / 2 ≈ 1.5708
