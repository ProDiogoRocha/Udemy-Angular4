import {Spacecraft}from './spacecraft'
import {Millenniumfalconn}from './starfighters'
import {Containership} from './containership';

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHperspace()

let falcon = new Millenniumfalconn()
falcon.jumpIntoHperspace()

let goodForTheJob = (ship:Containership)=> ship.cargoContainer >2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)?'YES':'NO'}`)