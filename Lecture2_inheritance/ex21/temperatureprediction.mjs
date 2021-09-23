import { weatherprediction } from "./base/weatherprediction.mjs";
import { temperature } from './temperature.mjs';

function temperatureprediction(type, unit, time, place, minValue, maxValue) {
    const weatherpredictionSuper = weatherprediction(type, unit, time, place, minValue, maxValue);

    function matches(temperature) {
        if (temperature.getType() === 'temperature') {
            const tempVal = temperature.getValue();
            const tempUnit = temperature.getUnit();

            if (unit === tempUnit) {
                return tempVal >= minValue && tempVal <= maxValue;
            }
            else {
                if (tempUnit === 'C') convertToC();
                else convertToF();

                return tempVal >= minValue && tempVal <= maxValue;
            }
        }
        return false;
    }

    function convertToF() {
        let newMinValue = weatherpredictionSuper.getMinValue();
        let newMaxValue = weatherpredictionSuper.getMaxValue();
        let newUnit = weatherpredictionSuper.getUnit();

        if (newUnit === 'C') {
            newMinValue = (newMinValue * 9) / 5 + 32;
            newMaxValue = (newMaxValue * 9) / 5 + 32;
            newUnit = 'F';
        }

        weatherpredictionSuper.setMinValue(newMinValue);
        weatherpredictionSuper.setMaxValue(newMaxValue);
        weatherpredictionSuper.setUnit(newUnit);
    }

    function convertToC() {
        let newMinValue = weatherpredictionSuper.getMinValue();
        let newMaxValue = weatherpredictionSuper.getMaxValue();
        let newUnit = weatherpredictionSuper.getUnit();

        if (newUnit === 'F') {
            newMinValue = ((newMinValue - 32) * 5) / 9;
            newMaxValue = ((newMaxValue - 32) * 5) / 9;
            newUnit = 'C';
        }

        weatherpredictionSuper.setMinValue(newMinValue);
        weatherpredictionSuper.setMaxValue(newMaxValue);
        weatherpredictionSuper.setUnit(newUnit);
    }

    return { ...weatherpredictionSuper, matches, convertToF, convertToC}

}

console.log("---------------------------------------");
//initialize objs
let temp1 = temperature('temperature', 'C', 25, new Date(), 'Horsens, DK');
let tempPred1 = temperatureprediction('temperature prediction', 'C', new Date(), 'Horsens, DK', 15, 30);
let tempPred2 = temperatureprediction('temperature prediction', 'F', new Date(), 'Horsens, DK', 78.8, 86);

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