class Paper{
    constructor (x,y,radius){
        var options={
            isStatic: false,
            restitution:0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        var angle = this.body.angle;

        push();
        translate(posX,posY);
        rotate(angle);
        angleMode(RADIANS);
        ellipseMode(RADIUS);
        fill("magenta");
        ellipse(0,0 , this.radius);
        pop();
    }
}