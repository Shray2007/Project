
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var Trash1,paper1,Ground1;	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}
Trash1= new Trash (800,0,20,20);
Paper1= new paper(0,700,20,20);
Ground1=new Ground(800,0,800,15);


 

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



