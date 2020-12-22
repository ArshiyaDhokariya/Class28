class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.spring= Constraint.create(options);
        World.add(world, this.spring);
    }

    fly(){
        this.spring.bodyA=null ;
    }

    display(){
        if(this.spring.bodyA !=null){
            var pointA = this.spring.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
    
}