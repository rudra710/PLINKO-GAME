class Particle{
    constructor(x,y,radius){
        var options = {
            restitution: 0.5,
            friction: 0
        }
        this.body = Bodies.circle(x,y,radius,options);
       
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        noStroke();
        translate(pos.x,pos.y);
       
        fill("yellow");
        ellipse(0,0,this.radius*2);
        pop();
    }
}