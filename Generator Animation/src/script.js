/*
  This generator assignment was a few trial and error as well as a lot of fun
  I used Bulma(https://bulma.io/documentation/) for the button
  I used P5.js(https://p5js.org/) and MO.js(https://mojs.github.io/) for the animation
*/

let isGrowing = true;
var buttonBoolean = null;

class Shape {
  constructor(vertices) {
    this.vertices = vertices;
    this.setPosition();
  }

  setPosition() {
    this.x = 200;
    this.y = 200;
    this.radius = 200;
  }

  display() {
    let segmentRadians = TWO_PI / this.vertices;
    beginShape();
    for (let i = 0; i < this.vertices; i++) {
      let x = sin(i * segmentRadians) * this.radius;
      let y = cos(i * segmentRadians) * this.radius;
      vertex(this.x + x, this.y + y); 
      if (this.radius > 200) {
        isGrowing = false;
      } else if (this.radius < -100) {
        isGrowing = true;
      }
      if (isGrowing == true) {
        this.radius += 0.25;
      } else if (isGrowing == false) {
        this.radius -= 0.25;
      }
    }
    endShape(CLOSE);
  }
}

let shapesArray = [];
let numShapes = 0;

function setup() {
  createCanvas(1000, 1000);
  for (let i = 0; i < 8; i++) {
    shapesArray.push(new Shape(i));
  }
}

function draw() {
  translate(600,20);
  ellipseMode(CENTER);
  rectMode(CENTER);

  for (let i = 0; i < shapesArray.length; i++) {
    shapesArray[i].display();
  }
}

const COLORS = {
  RED:      '#FD5061',
  YELLOW:   '#FFCEA5',
  BLACK:    '#29363B',
  WHITE:    'white',
  VINOUS:   '#A50710',
  TURQUOISE: '#40E0D0'
}

const burst1 = new mojs.Burst({
  left: 0, top: 0,
  count:5,
  radius:   { 50: 700 },
  children: {
    fill:   'white',
    shape:  'line',
    stroke: [ COLORS.WHITE, COLORS.TURQUOISE ],
    strokeWidth: 12, 
    radius: 'rand(30, 60)',
    radiusY: 0,
    scale: { 1: 0 },
    pathScale: 'rand(.5, 1)',
    degreeShift: 'rand(-360, 360)',
    isForce3d: true,
  }
});

const burst2 = new mojs.Burst({
  left: 0, top: 0,
  count:  3,
  radius: { 0: 700 },
  angle: 'rand(0, 360)',
  children: {
    shape:      [ 'circle', 'rect' ],
    points:     5,
    fill:       [ COLORS.WHITE, COLORS.TURQUOISE ],
    radius:     'rand(30, 60)',
    scale:      { 1: 0 },
    pathScale:  'rand(.5, 1)',
    isForce3d:  true
  }
});
  
const burst = new mojs.Burst({ 
  left: 0, top: 0,
  radius: { 0: 500 },
  count: 12,
  children: {
    fill:       { 'white' : 'cyan' },
    duration:   2000
  }
});

var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

document.addEventListener(clickHandler, function(e) {
  // console.log(buttonBoolean)
  const coords = { x: e.pageX, y: e.pageY };
  if(buttonBoolean == true){
      burst.tune(coords);
      burst.replay();
  }
  else{
      burst1.tune(coords);
      burst2.tune(coords);
      burst1.replay();
      burst2.replay();
  }
}, false);

document.getElementById("button1").addEventListener("click", function() {
  buttonBoolean = true;
});

document.getElementById("button2").addEventListener("click", function() {
  buttonBoolean = false;
});