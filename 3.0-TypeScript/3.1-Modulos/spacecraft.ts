export class Spacecraft{ 
    
    propulsor:string 
    
    constructor(propulsor:string){ 
        this.propulsor = propulsor;
    }

    jumpIntoHperspace(){
        console.log("Entering Hyperspace with "+this.propulsor);
    }
}

