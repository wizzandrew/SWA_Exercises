import { weatherdata } from './base/weatherdata.mjs';

class wind extends weatherdata{
    constructor(type, unit, value, time, place, direction) {
        super(type, unit, value, time, place);
        this.direction = direction;
        Object.freeze(this);
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

        return new wind(this.getType(), newUnit, newValue, this.getTime(), this.getPlace(), this.getDirection());
    }

    convertToMS() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if (newUnit === 'MPH') {
            newValue = newValue * 3600;
            newUnit = 'MS';
        }

        return new wind(this.getType(), newUnit, newValue, this.getTime(), this.getPlace(), this.getDirection());
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
let wind2 = wind1.convertToMS();

//get obj parameters
console.log(wind2.getUnit());
console.log(wind2.getValue());

//convert to miles per hour
let wind3 = wind2.convertToMPH();

//get obj parameters
console.log(wind3.getUnit());
console.log(wind3.getValue());
console.log("---------------------------------------")