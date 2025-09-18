let flowerSize = 20;
let amount = 4;
let gap = 90;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  // colorMode(HSB);
}

function flower() {
  noStroke();
  let petals = 16;

  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      // green part
      fill(50, 255, 50);
      rect(x, y, 40, 1);

      // main flower petals
      fill(0, 10, 250);
      rect(x, y, 20, 15);

      // Center of flower
      fill(255, 155);
      ellipse(x, y, 3);

      rotate(PI / 5);
    }
  }
}

function draw() {
  // to center the grid in the canvas (y coordinates)
  let y = (height - flowerSize * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    // to center the grid in the canvas (x coordinates)
    let x = (width - flowerSize * amount - gap * (amount - 1)) / 2;
    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);
      flower();
      pop();
      x += flowerSize + gap;
    }
    y += flowerSize + gap;
  }
}
