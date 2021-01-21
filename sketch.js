
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(200,300);
	b2 = new Bob(400,300);
	b3 = new Bob(600,300);
	chain1 = new Chain(b1.body,{x:200,y:100});
	chain2 = new Chain(b2.body,{x:400,y:100});
	chain3 = new Chain(b3.body,{x:600,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

	b1.Display();
	b2.Display();
	b3.Display();
	chain1.Display();
	chain2.Display();
	chain3.Display();

	
}



