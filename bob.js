class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:0.5,
			density:0.2
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
			ellipse(pos.y, pos.y, this.r*2, this.r*2);
			pop();
			
	}

}       