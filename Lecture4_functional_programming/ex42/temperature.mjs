import { weatherdata } from './base/weatherdata.mjs';

class temperature extends weatherdata{
    constructor(type, unit, value, time, place) {
        super(type, unit, value, time, place);
        Object.freeze(this);
    }
    
    convertToF() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if(newUnit  === 'C') {
            newValue = (newValue * 9)/5 + 32;
            newUnit = 'F';
        }

        return new temperature(this.getType(), newUnit, newValue, this.getTime(), this.getPlace());
    }

     convertToC() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if(newUnit === 'F') {
            newValue = ((newValue - 32) * 5)/9;
            newUnit = 'C';
        }

        return new temperature(this.getType(), newUnit, newValue, this.getTime(), this.getPlace());
    }
}

export { temperature }

//initialize obj

let temp1 = new temperature('temperature', 'C', 25, new Date(), 'Horsens, DK');

console.log("---------------------------------------");
//get obj parameters
console.log(temp1.getType());
console.log(temp1.getUnit());
console.log(temp1.getValue());
console.log(temp1.getTime());
console.log(temp1.getPlace());

//convert to farenheit
let temp2 = temp1.convertToF();

//get obj parameters
console.log(temp2.getUnit());
console.log(temp2.getValue());

//convert to celcius
let temp3 = temp2.convertToC();

//get obj parameters
console.log(temp3.getUnit());
console.log(temp3.getValue());
console.log("---------------------------------------");