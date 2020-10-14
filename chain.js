class chain {
constructor(bodyA,bodyB)
{
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffeness:0.5,
        lenght:25
        }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
}
display(){
push();
var posa = this.chain.bodyA.position;
var posb = this.chain.bodyB.position;
strokeWeight(5);
stroke("green");
fill(300,100,200);
line(posa.x,posa.y,posb.x,posb.y);
pop();

}

};