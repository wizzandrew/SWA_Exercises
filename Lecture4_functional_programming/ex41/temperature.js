//temperature class
function tempereature(unit, value) {

    function getUnit() {
        return Object.freeze(unit);
    }

    function getValue() {
        return Object.freeze(value);
    }

    function convertToF() {
        if(unit === 'C') {
            value = (value * 9)/5 + 32;
            unit = 'F';
        }
    }

    function convertToC() {
        if(unit === 'F') {
            value = ((value - 32) * 5)/9;
            unit = 'C';
        }
    }

    return Object.freeze({
        getUnit,
        getValue,
        convertToF,
        convertToC
    })
}

// //initialize obj
// let temp1 = tempereature('C', 25);

// console.log("---------------------------------------");
// //get obj parameters
// console.log(temp1.getUnit());
// console.log(temp1.getValue());

// //convert to farenheit
// temp1.convertToF();

// //get obj parameters
// console.log(temp1.getUnit());
// console.log(temp1.getValue());

// //convert to celcius
// temp1.convertToC();

// //trying to change params outside of function
// temp1.value = 44;

// //get obj parameters
// console.log(temp1.getUnit());
// console.log(temp1.getValue());
// console.log("---------------------------------------");




//temperature prediction class
function temperaturePrediction(unit, minValue, maxValue) {

    function getUnit() {
        return Object.freeze(unit);
    }

    function getMinValue() {
        return Object.freeze(minValue);
    }

    function getMaxValue() {
        return Object.freeze(maxValue);
    }

    function matches(temperature) {
        const temp = temperature.getValue();
        const tempUnit = temperature.getUnit();

        if(unit === tempUnit) {
            return temp >= minValue && temp <=maxValue;
        }
        else {
            if(tempUnit === 'C') convertToC();
            else convertToF();

            return temp >= minValue && temp <=maxValue;
        }
        
    }

    function convertToF() {
        if(unit === 'C') {
            minValue = (minValue * 9)/5 + 32;
            maxValue = (maxValue * 9)/5 + 32;
            unit = 'F';
        }
    }

    function convertToC() {
        if(unit === 'F') {
            minValue = ((minValue - 32) * 5)/9;
            maxValue = ((maxValue - 32) * 5)/9;
            unit = 'C';
        }
    }

    return Object.freeze({
        getUnit,
        getMinValue,
        getMaxValue,
        matches,
        convertToF,
        convertToC
    })
}

console.log("---------------------------------------");
//initialize objs
let temp1 = tempereature('C', 25);
let tempPred1 = temperaturePrediction('C', 15, 30);
let tempPred2 = temperaturePrediction('F', 78.8, 86);

//get obj parameters
console.log(tempPred1.getUnit());
console.log(tempPred1.getMinValue());
console.log(tempPred1.getMaxValue());

//convert to farenheit
tempPred1.convertToF();

//trying to change params outside of function
tempPred1.minValue = 77;
tempPred1.maxValue = 99;

//get obj parameters
console.log(tempPred1.getUnit());
console.log(tempPred1.getMinValue());
console.log(tempPred1.getMaxValue());

//matches
console.log(tempPred1.matches(temp1));
console.log(tempPred2.matches(temp1));

console.log("---------------------------------------");