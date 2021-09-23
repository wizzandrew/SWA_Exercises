import { weatherprediction } from "./base/weatherprediction.mjs";
import { precipitation } from './precipitation.mjs';

function precipitationprediction(type, unit, time, place, minValue, maxValue, expectedTypes) {
    const weatherpredictionSuper = weatherprediction(type, unit, time, place, minValue, maxValue);

    function getExpectedTypes() {
        return expectedTypes;
    }

    function matches(precipitation) {
        if (precipitation.getType() === 'precipitation') {
            const precip = precipitation.getValue();
            const precipUnit = precipitation.getUnit();

            if (unit === precipUnit) {
                return precip >= minValue && precip <= maxValue;
            }
            else {
                if (precipUnit === 'Inch') convertToInches();
                else convertToMM();

                return precip >= minValue && precip <= maxValue;
            }
        }
        return false;
    }

    function convertToInches() {
        let newMinValue = weatherpredictionSuper.getMinValue();
        let newMaxValue = weatherpredictionSuper.getMaxValue();
        let newUnit = weatherpredictionSuper.getUnit();

        if (newUnit === 'MM') {
            newMinValue = newMinValue / 25.4;
            newMaxValue = newMaxValue / 25.4;
            newUnit = 'Inch';
        }

        weatherpredictionSuper.setMinValue(newMinValue);
        weatherpredictionSuper.setMaxValue(newMaxValue);
        weatherpredictionSuper.setUnit(newUnit);
    }

    function convertToMM() {
        let newMinValue = weatherpredictionSuper.getMinValue();
        let newMaxValue = weatherpredictionSuper.getMaxValue();
        let newUnit = weatherpredictionSuper.getUnit();

        if (newUnit === 'Inch') {
            newMinValue = newMinValue * 25.4;
            newMaxValue = newMaxValue * 25.4;
            newUnit = 'MM';
        }

        weatherpredictionSuper.setMinValue(newMinValue);
        weatherpredictionSuper.setMaxValue(newMaxValue);
        weatherpredictionSuper.setUnit(newUnit);
    }

    return { ...weatherpredictionSuper, getExpectedTypes, matches, convertToInches, convertToMM }
}

console.log("---------------------------------------");
//initialize objs
let precip1 = precipitation('precipitation', 'rain', 'MM', 25.4, new Date(), 'Horsens, DK');
const precipTypes = ['rain', 'snow'];
let precipPred1 = precipitationprediction('precipitation prediction', 'MM', new Date(), 'Horsens, DK', 15, 30, precipTypes);
let precipPred2 = precipitationprediction('precipitation prediction', 'Inch', new Date(), 'Horsens, DK', 2, 3, precipTypes);

//get obj parameters
console.log(precipPred1.getType());
console.log(precipPred1.getUnit());
console.log(precipPred1.getMinValue());
console.log(precipPred1.getMaxValue());
console.log(precipPred1.getExpectedTypes());

//convert to inches
precipPred1.convertToInches();

//get obj parameters
console.log(precipPred1.getUnit());
console.log(precipPred1.getMinValue());
console.log(precipPred1.getMaxValue());

//matches
console.log(precipPred1.matches(precip1));
console.log(precipPred2.matches(precip1));
console.log("---------------------------------------");