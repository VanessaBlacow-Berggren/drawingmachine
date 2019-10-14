let noiseScale=0.02;

function setup() {
  createCanvas(400, 400);
  background(0);
  colorMode(HSB, 360, 100, 100);
}

function draw() {

  // console.log(frameCount % 360);

  if(mouseIsPressed) {
    background(0, 0.03);
    stroke(frameCount % 360, 100, 100);
    fill(frameCount % 360, 100, 100, 0.7);
    beginShape();
        vertex(mouseX, mouseY);
        vertex(mouseX + width/20, mouseY + height/20);
        vertex(pmouseX + width/20, pmouseY + height/20);
        vertex(pmouseX, pmouseY);
    endShape(CLOSE);

    for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(360 - frameCount % 360, 100, 100, 0.005);
    line(x, mouseY + noiseVal * 80, x, 0);
    }
}
}
