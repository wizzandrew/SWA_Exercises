import { weatherdata } from './base/weatherdata.mjs';

class precipitation {
    constructor(type, precipitationType,unit, value, time, place) {
        weatherdata.call(this, type, unit, value, time, place);
        this.precipitationType = precipitationType;
    }
    
    getPrecipitationType() {
        return this.precipitationType;
    }

    convertToInches() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if(newUnit === 'MM') {
            newValue = newValue / 25.4;
            newUnit = 'Inch';
        }

        this.setValue(newValue);
        this.setUnit(newUnit);
    }

    convertToMM() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if(newUnit === 'Inch') {
            newValue = newValue * 25.4;
            newUnit = 'MM';
        }

        this.setValue(newValue);
        this.setUnit(newUnit);
    }
}

export { precipitation }

let precip1 = new precipitation('precipitation', 'rain', 'MM', 25.4,new Date(), 'Horsens, DK');

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