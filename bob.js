class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false, 
			restitution:1.5, 
			friction:0, 
			density:3.5
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{	    var pos = this.body.position;
			push();
			fill(255,0,255);
			ellipseMode(RADIUS);
			ellipse(pos.x, pos.y, this.r, this.r);
			pop();
			
	}

}       