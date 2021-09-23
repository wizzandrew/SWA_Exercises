import { weatherdata } from './base/weatherdata.mjs';

class temperature {
    constructor(type, unit, value, time, place) {
        weatherdata.call(this, type, unit, value, time, place);
    }
    
    convertToF() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if(newUnit  === 'C') {
            newValue = (newValue * 9)/5 + 32;
            newUnit = 'F';
        }

        this.setValue(newValue);
        this.setUnit(newUnit);
    }

     convertToC() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if(newUnit === 'F') {
            newValue = ((newValue - 32) * 5)/9;
            newUnit = 'C';
        }

        this.setValue(newValue);
        this.setUnit(newUnit);
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
temp1.convertToF();

//get obj parameters
console.log(temp1.getUnit());
console.log(temp1.getValue());

//convert to celcius
temp1.convertToC();

//get obj parameters
console.log(temp1.getUnit());
console.log(temp1.getValue());
console.log("---------------------------------------");