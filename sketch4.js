let boxSize=35;
let boxSize2=20;

let posX=123;
let vitX=2;

let posY=234;
let vitY=1.234;

let r= Math.random () * 255;
let v= Math.random () * 255;
let b= Math.random () * 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//background(220);
  
  fill(r,v,b);
  square( posX, 0, boxSize2);
  square( posX, 100, boxSize);
  square( posX, 200, boxSize);
  square( posX, 300, boxSize2);
  square( posX, 400, boxSize);
  square( posX, 500, boxSize2);
  square( posX, 600, boxSize);
  
  square( 0,posY, boxSize);
   square( 100, posY, boxSize2);
   square( 200, posY, boxSize);
   square( 300, posY, boxSize);
   square( 400, posY, boxSize2);
   square( 500, posY, boxSize);
   square( 600, posY, boxSize2);
  
  posX = posX + vitX;
  posY += vitY; 
  
  
  if(posX +boxSize > width || posX <0 ) {
    vitX = vitX*-1
    changeColor()
}
if(posY +boxSize > height || posY <0 ) {
    vitY = vitY*-1
  changeColor()

} }

function changeColor (){
 r= Math.random () * 255;
 v= Math.random () * 255;
 b= Math.random () * 255;
}

function keyPressed (){ 
  if (key =="s"){save ("drawing.png") }}
  