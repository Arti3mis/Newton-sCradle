
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(250,300,25);
	bob2=new bob(300,300,25);
	bob3=new bob(350,300,25);
	bob4=new bob(400,300,25);
	bob5=new bob(450,300,25);
	
	roof1=new roof(350,100,300,30);

    rope1=new rope(bob1.body,roof1.body,-100,0);
	rope2=new rope(bob2.body,roof1.body,-50,0);
	rope3=new rope(bob3.body,roof1.body,0,0);
	rope4=new rope(bob4.body,roof1.body,+50,0);
	rope5=new rope(bob5.body,roof1.body,+100,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
   
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof1.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

   drawSprites();
 
}



