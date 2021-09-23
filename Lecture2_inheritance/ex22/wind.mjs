import { weatherdata } from './base/weatherdata.mjs';

class wind {
    constructor(type, unit, value, time, place, direction) {
        weatherdata.call(this, type, unit, value, time, place);
        this.direction = direction;
    }

    getDirection() {
        return this.direction;
    }

    convertToMPH() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if (newUnit === 'MS') {
            newValue = newValue / 3600;
            newUnit = 'MPH';
        }

        this.setValue(newValue);
        this.setUnit(newUnit);
    }

    convertToMS() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if (newUnit === 'MPH') {
            newValue = newValue * 3600;
            newUnit = 'MS';
        }

        this.setValue(newValue);
        this.setUnit(newUnit);
    }

}

export { wind }

//initialize obj
let wind1 = new wind('wind', 'MPH', 0.0166666666666667, new Date(), 'Horsens, DK', 'north-east');

console.log("---------------------------------------");
//get obj parameters
console.log(wind1.getType());
console.log(wind1.getUnit());
console.log(wind1.getValue());
console.log(wind1.getTime());
console.log(wind1.getPlace());
console.log(wind1.getDirection());

//convert to miles per seconds
wind1.convertToMS();

//get obj parameters
console.log(wind1.getUnit());
console.log(wind1.getValue());

//convert to miles per hour
wind1.convertToMPH();

//get obj parameters
console.log(wind1.getUnit());
console.log(wind1.getValue());
console.log("---------------------------------------");