let array = [];

function setup() {
  createCanvas(400, 400);
  // background(0);
  drawGrid();
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
    array.push([mouseX, mouseY]);
    }
}

function keyTyped() {

console.log(`key ${key} is being typed`)
  if (key === 's'){

  }
  else if (key === 'd'){
    // background(0);
    stroke(0);
    fill(0);
    // console.log(array);
    for(let i = 0; i< array.length - 1; i++){
    beginShape();
      vertex(array[i][0], array [i][1]);
      vertex(array[i][0] + width/20, array [i][1] + height/20);
      vertex(array[i + 1][0] + width/20, array[i + 1][1] + height/20);
      vertex(array[i + 1][0], array[i + 1][1]);
      endShape(CLOSE);
    }
  }
}

function drawGrid() {
  background(0);
  stroke(360);
  fill(0);

  numCells = 20;

  for (let j = 0; j <= width; j += width/ numCells){
    for (let h = 0; h<= height; h += height/numCells){
    rect(j, h, width/ numCells, height/ numCells );
  }
}
}
