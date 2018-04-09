import {Spacecraft}from './spacecraft'
import {Containership}from './containership'

export class Millenniumfalconn extends Spacecraft implements Containership{ 

    cargoContainer: number

    constructor(){
        super ("HyperDrive")
        this.cargoContainer=4
    }
    
    jumpIntoHperspace(){ 
        if(Math.random()>=0.5){
            super.jumpIntoHperspace()
        }else{
            console.log("Failed")
        }
    }
}