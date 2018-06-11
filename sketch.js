let angle = 0;
let rotation = 0;
let bat
let player
let bowler
var run = 0, wicket = 0

function setup() {
  // put setup code here
  createCanvas(800, 600);
  angleMode(DEGREES)
  player = new Player()
  bat = new Bat()
  ball = new Ball()
  bowler = new Bowler()
}


function draw() {
  // put drawing code here
  background(color(0,102,0))

  push()
  noStroke()
  fill(color(238, 191, 83))
  rect( 400, 0, 300, 1200)
  pop()

  push()
  textSize(32)
  fill(255)
  text('Runs', 20, 35)
  text(run, 50, 65)
  text('Wickets', width - 120, 35)
  text(wicket, width - 70, 65)
  pop()

  updateOrigin()

  bowler.display()
  strokeWeight(5)
  fill(color(204,0,0))
  ball.move()
  ball.display()


  fill(color(166,124,24))
  player.display()

  bat.display()
  bat.swing()

}


function Bat() {
    this.y = player.y
    this.width = 100
    this.height = 20
    this.x = player.x - 100
    this.ledge = this.x - this.width
    this.redge = this.x + this.width

  this.display = function() {
    rectMode(CENTER)
    rotate(angle)
    rect(player.x - 100, 0, this.width, this.height);
  }

  this.swing = function() {

      if (keyIsDown(32) && angle < 90) {
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

function Bowler() {
  this.x = -30
  this.y = -600

  this.display = function() {
    if (ball.y < -380) {
      this.y = ball.y
    }

    ellipse(this.x, this.y, 60)
  }
}

function Player() {
  this.x = 30
  this.y = 0

  this.display = function() {
    ellipse(this.x, 0, 60)
  }
}

function Ball() {
  this.y = -600
  this.x = -70
  this.yspeed = 5
  this.xspeed = 0
  this.size = 30

  this.move = function() {
   if (keyIsDown(32)) {
     if (dist(0, this.y, 0, bat.y) < this.size/2) {
       this.yspeed *= -1
       this.xspeed = random(1,5)
        run++
     }
   }
   else if (this.y > height) {
     ball.reset()
     this.yspeed = 5
     wicket++

   }
   else if (this.y < -500) {
     ball.reset()
     this.yspeed *= -1.05

   }

   this.y += this.yspeed
  this.x += this.xspeed
  }

  this.reset = function() {
   this.y = -500
   this.xspeed = 0
   this.x = -70
  }


   this.display = function() {
    ellipse(this.x, this.y, this.size)
  }
}

function updateOrigin() {
  translate(width/2, 500)
}