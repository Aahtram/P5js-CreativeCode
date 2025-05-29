let myImage1, myImage2, myImage3, myImage4;
let i1 = 0, i2 = 150, i3 = 300, i4 = 450;

function preload() {
  myImage1 = loadImage("image.jpg");
  myImage2 = loadImage("image.jpg");
  myImage3 = loadImage("image.jpg");
  myImage4 = loadImage("image.jpg");
}

function setup() {
  createCanvas(400, 400);
    background(220);
  
image(myImage1, 30, 20, -40);
image(myImage2, 20, -20, -20);
image(myImage3, 0, 20, 120);
image(myImage4, 50, -10, 50)
 
  //traitement d'images
myImage1.loadPixels();
for(let i=0;  i < myImage1.pixels.length;  i+=4){
 
  myImage1.pixels[i] +=30; //rouge
  myImage1.pixels[i+1] +=20; //vert
  myImage1.pixels[i+2] -=40; //bleu
}
  myImage1.updatePixels();
  image(myImage1,200,0);
 
  
  //traitement d'images
myImage2.loadPixels();
for(let i=0;  i < myImage2.pixels.length;  i+=4){
  
  myImage2.pixels[i] +=20; //rouge
  myImage2.pixels[i+1] -=20; //vert
  myImage2.pixels[i+2] -=20; //bleu
}
  myImage2.updatePixels();
  image(myImage2,0,150);
  
   //traitement d'images
myImage3.loadPixels();
for(let i=0;  i < myImage3.pixels.length;  i+=4){
  
  myImage3.pixels[i]   +=0; //rouge
  myImage3.pixels[i+1] +=20; //vert
  myImage3.pixels[i+2] +=120; //bleu
}
  myImage3.updatePixels();
  image(myImage3,200,150);
  
  
}


let i =0
function draw() {


  // Affichage des 4 images avec défilement vertical
  image(myImage1, 0, i1);  
  image(myImage2, 200, i2);  
  image(myImage3, 0, i3);  
  image(myImage4, 200, i4);  

  // Déplacement vertical des images
  i1++;
  i2++;
  i3++;
  i4++;

  // Réinitialisation de la position des images lorsqu'elles sortent de l'écran
  if (i1 > height) i1 = -150;
  if (i2 > height) i2 = -150;
  if (i3 > height) i3 = -150;
  if (i4 > height) i4 = -150;
}