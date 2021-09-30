import { datatype } from './datatype.mjs';
import { event } from './event.mjs';

class weatherprediction extends datatype {
    constructor(type, unit, time, place, minValue, maxValue) {
        super(type, unit);
        this.event = new event(time, place);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    getTime() {
        return this.event.getTime();
    }

    getPlace() {
        return this.event.getPlace();
    }

    getMinValue() {
        return this.minValue;
    }

    getMaxValue() {
        return this.maxValue;
    }
}

export { weatherprediction }

// weatherprediction.prototype = Object.create(datatype.prototype);
// let wd = new weatherprediction('temperature', 'C', new Date(), 'Horsens, DK', 25, 30);
// console.log(wd.getType());
// console.log(wd.getMaxValue());