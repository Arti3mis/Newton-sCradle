    class rope{
          constructor(body1,body2,x,y){
   var opt={bodyA:body1,bodyB:body2,pointB:{x:this.x,y:this.y}}
   this.x=x;
   this.y=y;
   
   this.rope=Constraint.create(opt);
   World.add(world,this.rope);
        }
    display(){

   var pointA=this.rope.bodyA.position;
   var pointB=this.rope.bodyB.position;
   strokeWeight(2);

   var Anchor1X=pointA.x;
   var Anchor1Y=pointA.y;

   var Anchor2X=pointB.x+this.x;
   var Anchor2Y=pointB.y+this.y;

   line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }

    }