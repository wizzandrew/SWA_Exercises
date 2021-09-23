import { weatherprediction } from "./base/weatherpredictions.mjs";
import { wind } from './wind.mjs';

class windprediction {
    constructor(type, unit, time, place, minValue, maxValue, expectedDirections) {
        weatherprediction.call(this, type, unit, time, place, minValue, maxValue);
        this.expectedDirections = expectedDirections;
    }
    getExpectedDirections() {
        return this.expectedDirections;
    }

    matches(wind) {
        if (wind.getType() === 'wind') {
            const windVal = wind.getValue();
            const windUnit = wind.getUnit();

            if (this.getUnit() === windUnit) {
                return windVal >= this.getMinValue() && windVal <= this.getMaxValue();
            }
            else {
                if (windUnit === 'MPH') this.convertToMPH();
                else this.convertToMS();

                return windVal >= this.getMinValue() && windVal <= this.getMaxValue();
            }
        }
        return false;
    }

    convertToMPH() {
        let newMinValue = this.getMinValue();
        let newMaxValue = this.getMaxValue();
        let newUnit = this.getUnit();

        if (newUnit === 'MS') {
            newMinValue = newMinValue / 3600;
            newMaxValue = newMaxValue / 3600;
            newUnit = 'MPH';
        }

        this.setMinValue(newMinValue);
        this.setMaxValue(newMaxValue);
        this.setUnit(newUnit);
    }

    convertToMS() {
        let newMinValue = this.getMinValue();
        let newMaxValue = this.getMaxValue();
        let newUnit = this.getUnit();

        if (newUnit === 'MPH') {
            newMinValue = newMinValue * 3600;
            newMaxValue = newMaxValue * 3600;
            newUnit = 'MS';
        }

        this.setMinValue(newMinValue);
        this.setMaxValue(newMaxValue);
        this.setUnit(newUnit);
    }
}

console.log("---------------------------------------");
//initialize objs
let wind1 = new wind('wind', 'MPH', 0.0166666666666667, new Date(), 'Horsens, DK', 'north-east');
const windDirections = ['north-east', 'north-west'];
let windPred1 = new windprediction('wind prediction', 'MPH',  new Date(), 'Horsens, DK', 0.005, 1, windDirections);
let windPred2 = new windprediction('wind  prediction', 'MS',  new Date(), 'Horsens, DK', 120, 180, windDirections);

//get obj parameters
console.log(windPred1.getType());
console.log(windPred1.getUnit());
console.log(windPred1.getMinValue());
console.log(windPred1.getMaxValue());
console.log(windPred1.getExpectedDirections());

//convert to mles per second
windPred1.convertToMS();

//get obj parameters
console.log(windPred1.getUnit());
console.log(windPred1.getMinValue());
console.log(windPred1.getMaxValue());

//matches
console.log(windPred1.matches(wind1));
console.log(windPred2.matches(wind1));

console.log("---------------------------------------");