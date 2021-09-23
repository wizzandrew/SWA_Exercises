import { weatherdata } from './base/weatherdata.mjs';

function wind(type, unit, value, time, place, direction) {
    const weatherdataSuper = weatherdata(type, unit, value, time, place);
    
    function getDirection() {
        return direction;
    }

    function convertToMPH() {
        let newValue = weatherdataSuper.getValue();
        let newUnit = weatherdataSuper.getUnit();

        if(newUnit === 'MS') {
            newValue = newValue / 3600;
            newUnit = 'MPH';
        }

        weatherdataSuper.setValue(newValue);
        weatherdataSuper.setUnit(newUnit);
    }

    function convertToMS() {
        let newValue = weatherdataSuper.getValue();
        let newUnit = weatherdataSuper.getUnit();

        if(newUnit === 'MPH') {
            newValue = newValue * 3600;
            newUnit = 'MS';
        }

        weatherdataSuper.setValue(newValue);
        weatherdataSuper.setUnit(newUnit);
    }

    return{...weatherdataSuper, getDirection, convertToMPH, convertToMS}
}

export { wind }

//initialize obj
let wind1 = wind('wind', 'MPH', 0.0166666666666667, new Date(), 'Horsens, DK', 'north-east');

console.log("---------------------------------------");
//get obj parameters
console.log(wind1.getType());
console.log(wind1.getUnit());
console.log(wind1.getValue());
console.log(wind1.getTime());
console.log(wind1.getPlace());
console.log(wind1.getDirection());

//convert to miles per seconds
wind1.convertToMS();

//get obj parameters
console.log(wind1.getUnit());
console.log(wind1.getValue());

//convert to miles per hour
wind1.convertToMPH();

//get obj parameters
console.log(wind1.getUnit());
console.log(wind1.getValue());
console.log("---------------------------------------");