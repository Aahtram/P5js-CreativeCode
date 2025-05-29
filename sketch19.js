function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  for (let x = 0 ; x < width; x++) {
    let r = map(x, 0, width, 255, 0);   
    let g = map(x, 0, width, 165, 255);   
    let b = map(x, 0, width, 0, 255);     

    stroke(r, g, b);
    line(x, 0, x, height);
  }
}


