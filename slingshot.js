class slingshot{
    constructor( bodyA, bodyB){
    var options={
        bodyA: bodyA, bodyB:bodyB,stiffness:.05, lenght:30
    }
    this.chian=Matter.Constraint.create(options)
    World.add(world, this.chian)
    }
    display(){
        line(this.chian.bodyA.position.x, this.chian.bodyA.position.y, this.chian.bodyB.position.x, this.chian.bodyB.position.y)
    }
}