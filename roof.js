       class roof{
    constructor(x,y,w,h){
var opt={isStatic:true}
this.x=x;
this.y=y;
this.w=w;
this.h=h;

this.body=Bodies.rectangle(x,y,w,h,opt);
World.add(world,this.body);

    }

display(){
    
var pos=this.body.position

rectMode(CENTER);
strokeWeight(2);
fill(173,164,164);
rect(pos.x,pos.y,this.w,this.h);

   }    
   }