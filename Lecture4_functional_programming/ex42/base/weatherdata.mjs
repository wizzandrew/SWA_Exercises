import { datatype } from './datatype.mjs';
import { event } from './event.mjs';

class weatherdata extends datatype {
    constructor(type, unit, value, time, place) {
        super(type, unit);
        this.event = new event(time, place);
        this.value = value;
    }

    getTime() {
        return this.event.getTime();
    }

    getPlace() {
        return this.event.getPlace();
    }

    getValue() {
        return this.value;
    }
}

export { weatherdata }

// let wd = new weatherdata('temperature', 'C', 25, new Date(), 'Horsens, DK');
// console.log(wd.getValue());
// console.log(wd.getType());
// console.log(wd.getTime());
// console.log(wd.getPlace());