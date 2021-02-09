  class bob{ 
        constructor(x,y,r){  

var opt={isStatic:false,restitution:0.3,friction:0.5,density:1} 
this.body=Bodies.circle(x,y,r,opt); 

this.x=x;
this.y=y;
this.r=r;

World.add(world,this.body);
        } 
        
display(){

var pos =this.body.position
ellipseMode(RADIUS);
fill(255,0,255);
ellipse(pos.x,pos.y,this.r,this.r);    

}

}