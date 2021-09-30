//wind class
function wind(unit, value, direction) {

    function getUnit() {
        return Object.freeze(unit);
    }

    function getValue() {
        return Object.freeze(value);
    }

    function getDirection() {
        return Object.freeze(direction);
    }

    function convertToMPH() {
        if(unit === 'MS') {
            value = value / 3600;
            unit = 'MPH';
        }
    }

    function convertToMS() {
        if(unit === 'MPH') {
            value = value * 3600;
            unit = 'MS';
        }
    }

    return Object.freeze({
        getUnit,
        getValue,
        getDirection,
        convertToMPH,
        convertToMS
    })
}

// //initialize obj
// let wind1 = wind('MPH', 0.0166666666666667, 'north-east');

// console.log("---------------------------------------");
// //get obj parameters
// console.log(wind1.getUnit());
// console.log(wind1.getValue());
// console.log(wind1.getDirection());

// //convert to miles per seconds
// wind1.convertToMS();

// //get obj parameters
// console.log(wind1.getUnit());
// console.log(wind1.getValue());

// //convert to miles per hour
// wind1.convertToMPH();

// //trying to change params outside of function
// wind1.value = 0.5;

// //get obj parameters
// console.log(wind1.getUnit());
// console.log(wind1.getValue());
// console.log("---------------------------------------");





//wind prediction class
function windPrediction(unit, minValue, maxValue, expectedDirections) {

    function getMinValue() {
        return Object.freeze(minValue);
    }

    function getMaxValue() {
        return Object.freeze(maxValue);
    }

    function getUnit() {
        return Object.freeze(unit);
    }

    function getExpectedDirections() {
        return Object.freeze(expectedDirections);
    }

    function matches(wind) {
        const windVal = wind.getValue();
        const windUnit = wind.getUnit();

        if(unit === windUnit) {
            return windVal >= minValue && windVal <=maxValue;
        }
        else {
            if(windUnit === 'MPH') convertToMPH();
            else convertToMS();

            return windVal >= minValue && windVal <=maxValue;
        }
    }

    function convertToMPH() {
        if(unit === 'MS') {
            minValue = minValue / 3600;
            maxValue = maxValue / 3600;
            unit = 'MPH';
        }
    }

    function convertToMS() {
        if(unit === 'MPH') {
            minValue = minValue * 3600;
            maxValue = maxValue * 3600;
            unit = 'MS';
        }
    }

    return Object.freeze({
        getMinValue,
        getMaxValue,
        getUnit,
        getExpectedDirections,
        matches,
        convertToMPH,
        convertToMS
    })
}

console.log("---------------------------------------");
//initialize objs
let wind1 = wind('MPH', 0.0166666666666667, 'north-east');
const windDirections = ['north-east', 'north-west'];
let windPred1 = windPrediction('MPH', 0.005, 1, windDirections);
let windPred2 = windPrediction('MS', 120, 180, windDirections);

//get obj parameters
console.log(windPred1.getUnit());
console.log(windPred1.getMinValue());
console.log(windPred1.getMaxValue());
console.log(windPred1.getExpectedDirections());

//convert to mles per second
windPred1.convertToMS();

//trying to change params outside of function
windPred1.minValue = 250;
windPred1.maxValue - 250;

//get obj parameters
console.log(windPred1.getUnit());
console.log(windPred1.getMinValue());
console.log(windPred1.getMaxValue());

//matches
console.log(windPred1.matches(wind1));
console.log(windPred2.matches(wind1));

console.log("---------------------------------------");