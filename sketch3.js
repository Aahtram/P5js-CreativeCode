function setup() {
  createCanvas(400, 400);
    background(220);
  

}

function draw() {  
   background(220);
  
  let r= Math.random () * 255;
let v= Math.random () * 255;
let b= Math.random () * 255;

  
  

  let time = millis() / 1000; // Temps en secondes

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      
      let scaleSize = 20 + 20 * sin(time + (x + y)); 
      // Change la taille des carrés en fonction du temps "sin permet de créer les alternances entre les diverses échelles"
     
       // Calculer la taille du carré en fonction du temps sans utiliser sin
      let scaleSize2 = 20 + (time % 2) * 20; 
      // Le carré alterne entre 20 et 40
      
      
      noStroke();
      fill(x * 32, 0, y* 32);
      square(x * 50, y * 50, scaleSize);
    }
  }
}
//usage de chat GPT