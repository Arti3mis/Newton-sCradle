
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1= new roof(400,100,550,20);

	bob1= new bob(40,300,20);
	bob2= new bob(80,300,20);
	bob3= new bob(120,300,20);
	bob4= new bob(160,300,20);
	bob5= new bob(200,300,20);

	rope1 = new rope(bob1.body, roof1.body, -80,  0);
	rope2 = new rope(bob2.body, roof1.body, -40,   0);
	rope3 = new rope(bob3.body, roof1.body,  0,  0);
	rope4 = new rope(bob4.body, roof1.body,  40,  0);
	rope5 = new rope(bob5.body, roof1.body,  80, 0);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
   Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:0});
}
}