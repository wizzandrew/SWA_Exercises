import { weatherprediction } from "./base/weatherprediction.mjs";
import { wind } from './wind.mjs';

function windprediction(type, unit, time, place, minValue, maxValue, expectedDirections) {
    const weatherpredictionSuper = weatherprediction(type, unit, time, place, minValue, maxValue);

    function getExpectedDirections() {
        return expectedDirections;
    }

    function matches(wind) {
        if (wind.getType() === 'wind') {
            const windVal = wind.getValue();
            const windUnit = wind.getUnit();

            if (unit === windUnit) {
                return windVal >= minValue && windVal <= maxValue;
            }
            else {
                if (windUnit === 'MPH') convertToMPH();
                else convertToMS();

                return windVal >= minValue && windVal <= maxValue;
            }
        }
        return false;
    }

    function convertToMPH() {
        let newMinValue = weatherpredictionSuper.getMinValue();
        let newMaxValue = weatherpredictionSuper.getMaxValue();
        let newUnit = weatherpredictionSuper.getUnit();

        if (newUnit === 'MS') {
            newMinValue = newMinValue / 3600;
            newMaxValue = newMaxValue / 3600;
            newUnit = 'MPH';
        }

        weatherpredictionSuper.setMinValue(newMinValue);
        weatherpredictionSuper.setMaxValue(newMaxValue);
        weatherpredictionSuper.setUnit(newUnit);
    }

    function convertToMS() {
        let newMinValue = weatherpredictionSuper.getMinValue();
        let newMaxValue = weatherpredictionSuper.getMaxValue();
        let newUnit = weatherpredictionSuper.getUnit();

        if (newUnit === 'MPH') {
            newMinValue = newMinValue * 3600;
            newMaxValue = newMaxValue * 3600;
            newUnit = 'MS';
        }

        weatherpredictionSuper.setMinValue(newMinValue);
        weatherpredictionSuper.setMaxValue(newMaxValue);
        weatherpredictionSuper.setUnit(newUnit);
    }

    return { ...weatherpredictionSuper, getExpectedDirections, matches, convertToMPH, convertToMS}
}

console.log("---------------------------------------");
//initialize objs
let wind1 = wind('wind', 'MPH', 0.0166666666666667, new Date(), 'Horsens, DK', 'north-east');
const windDirections = ['north-east', 'north-west'];
let windPred1 = windprediction('wind prediction', 'MPH',  new Date(), 'Horsens, DK', 0.005, 1, windDirections);
let windPred2 = windprediction('wind  prediction', 'MS',  new Date(), 'Horsens, DK', 120, 180, windDirections);

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