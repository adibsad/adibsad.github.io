let angle = 0;
let rotation = 0;
let bat
let player


function setup() {
  // put setup code here
  createCanvas(400, 400);
  angleMode(DEGREES)

  player = new Player()
  bat = new Bat()
}


function draw() {
  // put drawing code here
  background(0);

  fill(255)

  translate(width/2, 300)


  player.display()

  rectMode(CENTER)
  rotate(angle)
  rect(player.x - 100, 0, bat.width, bat.height);

  if(mousePressed) {

  }

  if (keyCode == 32) {
    if (keyIsPressed ) {
      rotation = 5
    }
    else if (angle > 90) {
      rotation = -5
    }
    else if (angle === 0) {
      rotation = 0
    }
    angle += rotation
    }
  }

class Bat {
  constructor() {
    this.y = player.y
    this.width = 0.25 * width
    this.height = 0.0625 * height
    this.pivot = player.x
  }
}

function Player() {
  this.x = 0
  this.y = 0

  this.display = function() {
    ellipse(this.x, 0, 60)
  }
}

class Ball {

}