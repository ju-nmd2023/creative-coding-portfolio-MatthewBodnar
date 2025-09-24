function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  strokeWeight(2);
  
  // start from a random point
  let x = (width/2);
  let y = (height/2);
  
  // draw first 3 branches
  for (let i = 0; i < 3; i++) {
    let angle = random(TWO_PI); // random direction
    let length = random(70, 100);
    branch(x, y, angle, length, 5);
  }
}

function branch(x, y, angle, length, depth) {
  if (depth === 0) return;
  
  let x2 = x + cos(angle) * length;
  let y2 = y + sin(angle) * length;
  
  line(x, y, x2, y2);
  
  // split into 3 new branches
  for (let i = 0; i < 3; i++) {
    let newAngle = angle + random(-PI/4, PI/4);
    let newLength = length * random(1, 2);
    branch(x2, y2, newAngle, newLength, depth - 1);
  }
}
