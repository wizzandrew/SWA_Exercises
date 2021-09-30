import { weatherprediction } from "./base/weatherpredictions.mjs";
import { precipitation } from './precipitation.mjs';

class precipitationprediction extends weatherprediction{
    constructor(type, unit, time, place, minValue, maxValue, expectedTypes) {
        super(type, unit, time, place, minValue, maxValue);
        this.expectedTypes = expectedTypes;
        Object.freeze(this);
    }

    getExpectedTypes() {
        return this.expectedTypes;
    }

    matches(precipitation) {
        if (precipitation.getType() === 'precipitation') {
            const precip = precipitation.getValue();
            const precipUnit = precipitation.getUnit();

            if (this.getUnit() === precipUnit) {
                return precip >= this.getMinValue() && precip <= this.getMaxValue();
            }
            else {
                let newTP = {};
                if (precipUnit === 'Inch') newTP = this.convertToInches();
                else newTP = this.convertToMM();

                return precip >= newTP.getMinValue() && precip <= newTP.getMaxValue();
            }
        }
        return false;
    }

    convertToInches() {
        let newMinValue = this.getMinValue();
        let newMaxValue = this.getMaxValue();
        let newUnit = this.getUnit();

        if (newUnit === 'MM') {
            newMinValue = newMinValue / 25.4;
            newMaxValue = newMaxValue / 25.4;
            newUnit = 'Inch';
        }

        return new precipitationprediction(this.getType(), newUnit, this.getTime(), this.getPlace(), newMinValue, newMaxValue, this.getExpectedTypes());
    }

    convertToMM() {
        let newMinValue = this.getMinValue();
        let newMaxValue = this.getMaxValue();
        let newUnit = this.getUnit();

        if (newUnit === 'Inch') {
            newMinValue = newMinValue * 25.4;
            newMaxValue = newMaxValue * 25.4;
            newUnit = 'MM';
        }

        return new precipitationprediction(this.getType(), newUnit, this.getTime(), this.getPlace(), newMinValue, newMaxValue, this.getExpectedTypes());
    }
}

console.log("---------------------------------------");
//initialize objs
let precip1 = new precipitation('precipitation', 'rain', 'MM', 25.4, new Date(), 'Horsens, DK');
const precipTypes = ['rain', 'snow'];
let precipPred1 = new precipitationprediction('precipitation prediction', 'MM', new Date(), 'Horsens, DK', 15, 30, precipTypes);
let precipPred2 = new precipitationprediction('precipitation prediction', 'Inch', new Date(), 'Horsens, DK', 2, 3, precipTypes);

//get obj parameters
console.log(precipPred1.getType());
console.log(precipPred1.getUnit());
console.log(precipPred1.getMinValue());
console.log(precipPred1.getMaxValue());
console.log(precipPred1.getExpectedTypes());

//convert to inches
let precipPred3 = precipPred1.convertToInches();

//get obj parameters
console.log(precipPred3.getUnit());
console.log(precipPred3.getMinValue());
console.log(precipPred3.getMaxValue());

//matches
console.log(precipPred1.matches(precip1));
console.log(precipPred2.matches(precip1));
console.log("---------------------------------------");