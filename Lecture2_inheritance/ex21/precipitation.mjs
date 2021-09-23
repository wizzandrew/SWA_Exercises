import { weatherdata } from './base/weatherdata.mjs';

function precipitation(type, precipitationType,unit, value, time, place) {
    const weatherdataSuper = weatherdata(type, unit, value, time, place); 

    function getPrecipitationType() {
        return precipitationType;
    }

    function convertToInches() {
        let newValue = weatherdataSuper.getValue();
        let newUnit = weatherdataSuper.getUnit();

        if(newUnit === 'MM') {
            newValue = newValue / 25.4;
            newUnit = 'Inch';
        }

        weatherdataSuper.setValue(newValue);
        weatherdataSuper.setUnit(newUnit);
    }

    function convertToMM() {
        let newValue = weatherdataSuper.getValue();
        let newUnit = weatherdataSuper.getUnit();

        if(newUnit === 'Inch') {
            newValue = newValue * 25.4;
            newUnit = 'MM';
        }

        weatherdataSuper.setValue(newValue);
        weatherdataSuper.setUnit(newUnit);
    }

    return{...weatherdataSuper, getPrecipitationType, convertToInches, convertToMM}
}

export { precipitation }

let precip1 = precipitation('precipitation', 'rain', 'MM', 25.4,new Date(), 'Horsens, DK');

console.log("---------------------------------------");
//get obj parameters
console.log(precip1.getType());
console.log(precip1.getPrecipitationType());
console.log(precip1.getUnit());
console.log(precip1.getValue());
console.log(precip1.getTime());
console.log(precip1.getPlace());

//convert to inches
precip1.convertToInches();

//get obj parameters
console.log(precip1.getUnit());
console.log(precip1.getValue());

//convert to milimetres
precip1.convertToMM();

//get obj parameters
console.log(precip1.getUnit());
console.log(precip1.getValue());
console.log("---------------------------------------");