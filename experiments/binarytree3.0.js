let branches = [];
let growthSpeed = 0.03;


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
    branches.push(buildBranch(x, y, angle, length, 5));
  }
}


function draw() {
  background(0);
  for (let b of branches) {
    drawBranch(b);
  }
}


// branch segments into a nested structure
function buildBranch(x, y, angle, length, depth) {
  if (depth === 0) return null;

  let x2 = x + cos(angle) * length;
  let y2 = y + sin(angle) * length;

  let node = {
    x1: x,
    y1: y,
    x2: x2,
    y2: y2,
    t: 0,
    children: []
  };

  for (let i = 0; i < 3; i++) {
    let newAngle = angle + random(-PI / 4, PI / 4);
    let newLength = length * random(1, 2);
    let child = buildBranch(x2, y2, newAngle, newLength, depth - 1);
    if (child) node.children.push(child);
  }

  return node;
}


// draw branch with smooth growth
function drawBranch(node) {
  if (!node) return;

  node.t += growthSpeed;
  if (node.t > 1) node.t = 1;

  let xEnd = lerp(node.x1, node.x2, node.t);
  let yEnd = lerp(node.y1, node.y2, node.t);
  line(node.x1, node.y1, xEnd, yEnd);

  // draw children branches if the segment is fully drawn
  if (node.t >= 1) {
    for (let child of node.children) {
      drawBranch(child);
    }
  }
}
