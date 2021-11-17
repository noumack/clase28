class Resortera{
    constructor(bodyA,pointB){
        var opciones ={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10 
        }
    this.pointB = pointB;
    this.resorte = Constraint.create(opciones);
    World.add(world,this.resorte);
    }
    display(){

        if(this.resorte.bodyA){
        var puntoA=this.resorte.bodyA.position;
        var puntoB=this.pointB;
        push();   
        stroke("purple");
        strokeWeight(5);
        line(puntoA.x,puntoA.y,puntoB.x,puntoB.y);
        pop();
        }
    }
    
    fly(){
        this.resorte.bodyA = null
        
    }
    }