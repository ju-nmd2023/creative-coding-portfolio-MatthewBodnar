let segments = []; 
let current = 0;  

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  strokeWeight(2);

  let x = width / 2;
  let y = height / 2;

  let baseAngle = random(TWO_PI);

  // 3 main branches
  for (let i = 0; i < 3; i++) {
    let angle = baseAngle + i * TWO_PI / 3;
    let length = random(70, 100);
    branch(x, y, angle, length, 5);
  }
}

function draw() {
  if (current < segments.length) {
    let s = segments[current];
    line(s.x1, s.y1, s.x2, s.y2);
    current++;
  }
}

// store segments
function branch(x, y, angle, length, depth) {
  if (depth === 0) return;

  let x2 = x + cos(angle) * length;
  let y2 = y + sin(angle) * length;

  segments.push({ x1: x, y1: y, x2: x2, y2: y2 });

  for (let i = 0; i < 3; i++) {
    let newAngle = angle + random(-PI / 4, PI / 4);
    let newLength = length * random(1, 2);
    branch(x2, y2, newAngle, newLength, depth - 1);
  }
}
