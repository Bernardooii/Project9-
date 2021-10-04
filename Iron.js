class Iron{
    constructor(x,y,width,height) }
     var options = {
        'density':30,
        'friction':3,
        'restitution':0.8
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    {
    display();
            var ironpos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(ironpos.x, ironpos.y);
            rectMode(CENTER)
            strokeWeight(4);
            stroke("black");
            fill("black");
            rect(0, 0, this.width, this.height);
            pop();
    }