import {Spacecraft}from './spacecraft'
import {Millenniumfalconn}from './starfighters'
import {Containership} from './containership';

import * as _ from 'lodash'
console.log(_.pad("TypeScript Examples", 40,"="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHperspace()

let falcon = new Millenniumfalconn()
falcon.jumpIntoHperspace()

let goodForTheJob = (ship:Containership)=> ship.cargoContainer >2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)?'YES':'NO'}`)