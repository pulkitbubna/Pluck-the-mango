
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,boy;
var treeo,groundo;	

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000 , 700)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
treeo = new tree(700,500,5,5);
groundo = new ground(500,675,1000,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  treeo.display();
  groundo.display();
  drawSprites();
 
}



