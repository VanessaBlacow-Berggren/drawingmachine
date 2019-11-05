let array = [];
let input, button, greeting, restart;
let drawing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(0);
  drawGrid(50);
  colorMode(HSB, 360, 100, 100);

  input = createInput();
  input.position(width/ 2.4, height /5);

  button = createButton('submit');
  button.position(input.x + input.width, height/ 5);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Make a promise to yourself');
  greeting.position(width / 2.5, height / 10);

  restart = createElement('h3', 'Press `r` to restart your rainbow');
  restart.position(width / 2.5, height / 4.3);

  textAlign(CENTER);
  textSize(10)

}

function draw() {

  // console.log(frameCount % 360);

  // if (mouseX < 2.4 && mouseX > 1.69){

  // }

 if(mouseIsPressed && drawing) {
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

    // greetText();
}

function keyTyped() {

console.log(`key ${key} is being typed`)
  // if (key === 's'){
  //
  // }
   if (key === 'r'){
    drawGrid(20);
    noStroke();
    noFill();
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

function drawGrid(sTroke) {
  background(0);
  stroke(sTroke);
  fill(0);

  numCells = 20;

  for (let j = 0; j <= width; j += width/ numCells){
    for (let h = 0; h<= height; h += height/numCells){
    rect(j, h, width/ numCells, height/ numCells);
  }
}
}


function greet() {
  const name = input.value();
  greeting.html('Promise received! Now draw your rainbow!');
  input.value('');

  drawing = true;

  // for (let i = 0; i < 200; i++) {
  //   push();
  //   fill(0);
  //   translate(random(width), random(height));
  //   text(name, 0, 0);
  //   pop();
  // }
}
