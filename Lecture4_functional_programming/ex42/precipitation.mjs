import { weatherdata } from './base/weatherdata.mjs';

class precipitation extends weatherdata{
    constructor(type, precipitationType,unit, value, time, place) {
        super(type, unit, value, time, place);
        this.precipitationType = precipitationType;
        Object.freeze(this);
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

        return new precipitation(this.getType(), this.getPrecipitationType(), newUnit, newValue, this.getTime(), this.getPlace());
    }

    convertToMM() {
        let newValue = this.getValue();
        let newUnit = this.getUnit();

        if(newUnit === 'Inch') {
            newValue = newValue * 25.4;
            newUnit = 'MM';
        }

        return new precipitation(this.getType(), this.getPrecipitationType(), newUnit, newValue, this.getTime(), this.getPlace());
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
let precip2 = precip1.convertToInches();

//get obj parameters
console.log(precip2.getUnit());
console.log(precip2.getValue());

//convert to milimetres
let precip3 = precip2.convertToMM();

//get obj parameters
console.log(precip3.getUnit());
console.log(precip3.getValue());

// check extensibility of immutable object
// precip3.getTime = () => {return 'time'};
console.log("---------------------------------------");