//precipitation class
function precipitation(unit, value, precipitationType) {

    function getUnit() {
        return unit;
    }

    function getValue() {
        return value;
    }


    function getPrecipitationType() {
        return precipitationType;
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

    return {
        getUnit,
        getValue,
        getPrecipitationType,
        convertToInches,
        convertToMM
    }
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

// //get obj parameters
// console.log(precip1.getUnit());
// console.log(precip1.getValue());
// console.log("---------------------------------------");





//precipitation prediction class
function precipitationPrediction(unit, minValue, maxValue, expectedTypes) {

    function getMinValue() {
        return minValue;
    }

    function getMaxValue() {
        return maxValue;
    }

    function getUnit() {
        return unit;
    }

    function getExpectedTypes() {
        return expectedTypes;
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

    return{
        getMinValue,
        getMaxValue,
        getUnit,
        getExpectedTypes,
        matches,
        convertToInches,
        convertToMM
    }
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

//get obj parameters
console.log(precipPred1.getUnit());
console.log(precipPred1.getMinValue());
console.log(precipPred1.getMaxValue());

//matches
console.log(precipPred1.matches(precip1));
console.log(precipPred2.matches(precip1));

// console.log("---------------------------------------");