
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
var radius = 40;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(500,600,20,120)
	rightSide = new Ground(700,600,20,120)

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Matter.Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y,radius,radius)
  groundObj.display();
  leftSide.display();
  rightSide.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position,{x:25,y:-25})

	}
}

