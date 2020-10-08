const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var eng,world;
var obj,ball;

function setup() {
  createCanvas(400,400);

  eng = Engine.create();
  world = eng.world;
 
var ect = {
  isStatic:true
}

  obj = Bodies.rectangle(200,380,400,20,ect);

World.add(world,obj);         
var orangejuice = {
restitution:2.0
}

ball = Bodies.circle(360,200,20,orangejuice);

World.add(world,ball);


}

function draw() {
  background(0,0,0); 

  Engine.update(eng);

  rectMode(CENTER);
rect(obj.position.x,obj.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}
