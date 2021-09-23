import { weatherprediction } from "./base/weatherpredictions.mjs";
import { temperature } from './temperature.mjs';

class temperatureprediction {
    constructor(type, unit, time, place, minValue, maxValue) {
        
    }

    matches(temperature) {
        if (temperature.getType() === 'temperature') {
            const tempVal = temperature.getValue();
            const tempUnit = temperature.getUnit();

            if (this.getUnit() === tempUnit) {
                return tempVal >= this.getMinValue() && tempVal <= this.getMaxValue();
            }
            else {
                if (tempUnit === 'C') this.convertToC();
                else this.convertToF();

                return tempVal >= this.getMinValue() && tempVal <= this.getMaxValue();
            }
        }
        return false;
    }

    convertToF() {
        let newMinValue = this.getMinValue();
        let newMaxValue = this.getMaxValue();
        let newUnit = this.getUnit();

        if (newUnit === 'C') {
            newMinValue = (newMinValue * 9) / 5 + 32;
            newMaxValue = (newMaxValue * 9) / 5 + 32;
            newUnit = 'F';
        }

        this.setMinValue(newMinValue);
        this.setMaxValue(newMaxValue);
        this.setUnit(newUnit);
    }

    convertToC() {
        let newMinValue = this.getMinValue();
        let newMaxValue = this.getMaxValue();
        let newUnit = this.getUnit();

        if (newUnit === 'F') {
            newMinValue = ((newMinValue - 32) * 5) / 9;
            newMaxValue = ((newMaxValue - 32) * 5) / 9;
            newUnit = 'C';
        }

        this.setMinValue(newMinValue);
        this.setMaxValue(newMaxValue);
        this.setUnit(newUnit);
    }
}

console.log("---------------------------------------");
//initialize objs
let temp1 = new temperature('temperature', 'C', 25, new Date(), 'Horsens, DK');
let tempPred1 = new temperatureprediction('temperature prediction', 'C', new Date(), 'Horsens, DK', 15, 30);
let tempPred2 = new temperatureprediction('temperature prediction', 'F', new Date(), 'Horsens, DK', 78.8, 86);

//get obj parameters
console.log(tempPred1.getType());
console.log(tempPred1.getUnit());
console.log(tempPred1.getMinValue());
console.log(tempPred1.getMaxValue());

//convert to farenheit
tempPred1.convertToF();

//get obj parameters
console.log(tempPred1.getUnit());
console.log(tempPred1.getMinValue());
console.log(tempPred1.getMaxValue());

//matches
console.log(tempPred1.matches(temp1));
console.log(tempPred2.matches(temp1));

console.log("---------------------------------------");