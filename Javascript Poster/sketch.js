/*
  Poster Assignment
  If you press the canvas it'll play the mario sound
  If you press w the character will change to wario
  If you press m the character will change to mario
  If you press the left arrow it'll change the background to black and left to go back to grey
*/

let img;
let cloudimg;
let groundimg;
let flappy_backg;
let flappy_bird;
let imgCur;
let wario;
let song;
var x;
var x_mario;
var y_mario;
var switch_val;
var x_bird = 5;
var y_bird = 2520;
let title = "Game on";
let date = "September";
var fill_value = 220;

function preload() {
  groundimg = loadImage('img/mario.jpg');
  cloudimg = loadImage('img/cloud.png');
  flappy_backg = loadImage('img/flappy.png');
  flappy_bird = loadImage('img/bird.png');
  img = loadImage('img/marioperson.png');
  wario = loadImage('img/wario.png');
  imgCur = img;
}

function setup() {
  song = loadSound('Super Mario Medley.mp3');
  createCanvas(1080, 1920);
  scaleCanvas(0.3);
  x = -200;
  switch_value = true;
  x_mario = -100;
  y_mario = 12000;
  
}

function scaleCanvas(displayScale) {
  let cnv = select('canvas').elt;
  canvas.style.setProperty('transform', 'scale(' + displayScale + ')');
  canvas.style.setProperty('transform-origin', 'left top');
}

function pipe(offsetx, offsety, offsetheight, fixheight) {
  const _x = 800 + offsetx;
  push();
  rectMode(CENTER);
  fill(0, 150, 0);
  rect(_x, 820 + fixheight, 50, 190 + offsetheight);
  rect(_x, 720 - offsety, 55, 30);
  rect(_x, 900, 55, 30);
  stroke(2);
  strokeWeight(2);
  pop();
}

function ground() {
  const _sizeX = width / 30;
  const _sizeY = height / 50;
  for (let i = 0; i < 30; i++) {
      image(groundimg, i * _sizeX, _sizeY + 1000, _sizeX, _sizeY);
      image(groundimg, i * _sizeX, _sizeY + 963, _sizeX, _sizeY);
      image(groundimg, i * _sizeX, _sizeY + 926, _sizeX, _sizeY);
      image(groundimg, i * _sizeX, _sizeY + 889, _sizeX, _sizeY);
  }
}

function flappy(){
  push();
  scale(1.1);
  let x = 5
  let y = 980
  image(flappy_backg, x, y);
  pop();
  push();
  translate(3, height / 2.05);
  pipe(0, 0, 0, 0);
  pipe(-200, 90, 100, -60);
  pipe(-500, 90, 100, -60);
  pop();
  push();
  translate(3,height/5.2);
  pipe(20, 0, 0, 0);
  pipe(-700, 0, 0, 0);
  pop();
  push();
  translate(1000,height+73);
  rotate(radians(180));
  pipe(-200, 75, 80, -40);
  pop();
}

function draw() {
  var speedX, speedY;
  background(fill_value);
  ground();
  push();
  translate(0,18);
  pipe(0, 0, 0, 0);
  pipe(-200, 140, 110, -80);
  pop();

  textSize(50);
  textFont("Orbitron");
  text("4-5PM", 430, 520);
  text("September 17th", 300, 470);

  for(let i=0; i < title.length; i++) {
    let curChar = title.charAt(i);
    fill(noise(frameCount/20 + i) * 255);
    text(curChar, 295 + i * 70, 400);
  }
  flappy();
  push();
  scale(0.7);
  image(cloudimg, x, 0);
  if (x > width + 50) {
    x = -500;
  } else {
    x += 1;
  }
  pop();

  scale(0.07);
  image(imgCur, x_mario, y_mario);

  if (x_mario == 6500 && y_mario != 6710) 
  {
    y_mario -= 10;
  } 
  else if(y_mario == 6700)
  {
    y_mario += 5;
  }
  else if(y_mario != 6780 && x_mario !=8000) 
  {
    x_mario += 10;
    
  }
  else
  {
    x_mario = -1500;
    y_mario = 12000;
  }
  push();
  scale(8);
  image(flappy_bird,x_bird,y_bird);
  if (x_bird > width + 600) {
    x_bird = -500;
    y_bird = 2520;
  } else {
    x_bird += 10;
    y_bird += 2.82;
    y_bird -= 2.5;
  }
  pop();
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

function keyPressed() { 
  if (keyCode == LEFT_ARROW){
    fill_value = 0;
  }
  else if (keyCode == RIGHT_ARROW){
    fill_value = 220;
  }
  else if(key == 'w'){
    imgCur = wario;
  }
  else if(key == 'm'){
    imgCur = img;
  }
} 
