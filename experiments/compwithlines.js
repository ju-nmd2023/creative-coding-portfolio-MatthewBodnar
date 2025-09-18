let circleSize = 350;

function setup() {
  createCanvas(800, 800);
  background(245);
  noStroke();
  noLoop();
}

function draw() {
  translate(width/2, height/2);
  let numRects = 500;
  for (let i = 0; i < numRects; i++) {
    let x = random(-circleSize, circleSize);
    let y = random(-circleSize, circleSize);
    if (dist(0, 0, x, y) < circleSize) {
      let w = random(5, 40); 
      let h = random(5, 10);
      if (random() < 0.5) { let temp = w; w = h; h = temp; }
      fill(0);
      rect(x, y, w, h);
    }
  }
}
