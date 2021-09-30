//precipitation class
function precipitation(unit, value, precipitationType) {

    function getUnit() {
        return Object.freeze(unit);
    }

    function getValue() {
        return Object.freeze(value);
    }


    function getPrecipitationType() {
        return Object.freeze(precipitationType);
    }

    function convertToInches() {
        if(unit === 'MM') {
            value = value / 25.4;
            unit = 'Inch';
        }
    }

    function convertToMM() {
        if(unit === 'Inch') {
            value = value * 25.4;
            unit = 'MM';
        }
    }

    return Object.freeze({
        getUnit,
        getValue,
        getPrecipitationType,
        convertToInches,
        convertToMM
    })
}

// //initialize obj
// let precip1 = precipitation('MM', 25.4, 'rain');

// console.log("---------------------------------------");
// //get obj parameters
// console.log(precip1.getUnit());
// console.log(precip1.getValue());
// console.log(precip1.getPrecipitationType());

// //convert to inches
// precip1.convertToInches();

// //get obj parameters
// console.log(precip1.getUnit());
// console.log(precip1.getValue());

// //convert to milimetres
// precip1.convertToMM();

// //trying to change params outside of function
// precip1.value = 30;
// //get obj parameters
// console.log(precip1.getUnit());
// console.log(precip1.getValue());


// console.log("---------------------------------------");





//precipitation prediction class
function precipitationPrediction(unit, minValue, maxValue, expectedTypes) {

    function getMinValue() {
        return Object.freeze(minValue);
    }

    function getMaxValue() {
        return Object.freeze(maxValue);
    }

    function getUnit() {
        return Object.freeze(unit);
    }

    function getExpectedTypes() {
        return Object.freeze(expectedTypes);
    }

    function matches(precipitation) {
        const precip = precipitation.getValue();
        const precipUnit = precipitation.getUnit();

        if(unit === precipUnit) {
            return precip >= minValue && precip <=maxValue;
        }
        else {
            if(precipUnit === 'Inch') convertToInches();
            else convertToMM();

            return precip >= minValue && precip <=maxValue;
        }
    }

    function convertToInches() {
        if(unit === 'MM') {
            minValue = minValue / 25.4;
            maxValue = maxValue / 25.4;
            unit = 'Inch';
        }
    }

    function convertToMM() {
        if(unit === 'Inch') {
            minValue = minValue * 25.4;
            maxValue = maxValue * 25.4;
            unit = 'MM';
        }
    }

    return Object.freeze({
        getMinValue,
        getMaxValue,
        getUnit,
        getExpectedTypes,
        matches,
        convertToInches,
        convertToMM
    })
}

console.log("---------------------------------------");
//initialize objs
let precip1 = precipitation('MM', 25.4, 'rain');
const precipTypes = ['rain', 'snow'];
let precipPred1 = precipitationPrediction('MM', 15, 30, precipTypes);
let precipPred2 = precipitationPrediction('Inch', 2, 3, precipTypes);

//get obj parameters
console.log(precipPred1.getUnit());
console.log(precipPred1.getMinValue());
console.log(precipPred1.getMaxValue());
console.log(precipPred1.getExpectedTypes());

//convert to inches
precipPred1.convertToInches();

//trying to change params outside of function
precipPred1.minValue = 2;
precipPred2.maxValue = 3;

//get obj parameters
console.log(precipPred1.getUnit());
console.log(precipPred1.getMinValue());
console.log(precipPred1.getMaxValue());

//matches
console.log(precipPred1.matches(precip1));
console.log(precipPred2.matches(precip1));

// console.log("---------------------------------------");