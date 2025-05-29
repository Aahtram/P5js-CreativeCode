let papillon;

function preload() {
  papillon = loadImage('papillion.jpg.avif');
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
background(247, 238, 213);


image(papillon, 10, 75, 280, 250);

  
noStroke()

fill (143, 193, 207);
rect(300, 5, 70, 70);
  

fill (111, 153, 143);
rect (300, 85, 70, 70);


fill (137, 125, 140);
rect (300, 165, 70, 70);

  
fill (205, 101, 97);
rect (300, 245, 70, 70);

  
fill (49, 47, 41);
rect (300, 325, 70, 70);

}