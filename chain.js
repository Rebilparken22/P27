class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.07,
            length:125,
            damping:0
        }
        this.pointB = pointB;
        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);
}
Display(){
    push();
    fill(0);
     line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
    
    pop();
}

}