import { weatherdata } from './base/weatherdata.mjs';

function temperature(type, unit, value, time, place) {
    const weatherdataSuper = weatherdata(type, unit, value, time, place);
    
    function convertToF() {
        let newValue = weatherdataSuper.getValue();
        let newUnit = weatherdataSuper.getUnit();

        if(newUnit  === 'C') {
            newValue = (newValue * 9)/5 + 32;
            newUnit = 'F';
        }

        weatherdataSuper.setValue(newValue);
        weatherdataSuper.setUnit(newUnit);
    }

    function convertToC() {
        let newValue = weatherdataSuper.getValue();
        let newUnit = weatherdataSuper.getUnit();

        if(newUnit === 'F') {
            newValue = ((newValue - 32) * 5)/9;
            newUnit = 'C';
        }

        weatherdataSuper.setValue(newValue);
        weatherdataSuper.setUnit(newUnit);
    }

    return{...weatherdataSuper, convertToF, convertToC}
}

export { temperature }

//initialize obj

let temp1 = temperature('temperature', 'C', 25, new Date(), 'Horsens, DK');

console.log("---------------------------------------");
//get obj parameters
console.log(temp1.getType());
console.log(temp1.getUnit());
console.log(temp1.getValue());
console.log(temp1.getTime());
console.log(temp1.getPlace());

//convert to farenheit
temp1.convertToF();

//get obj parameters
console.log(temp1.getUnit());
console.log(temp1.getValue());

//convert to celcius
temp1.convertToC();

//get obj parameters
console.log(temp1.getUnit());
console.log(temp1.getValue());
console.log("---------------------------------------");