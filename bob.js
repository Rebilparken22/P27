class Bob {
constructor(x,y){
this.radius = 40;
this.body = Bodies.circle(x,y,40);
World.add(world,this.body);


}
Display(){
push();
fill("green");
ellipse(this.body.position.x,this.body.position.y,2*this.radius);


pop();


}

}