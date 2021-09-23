import { datatype } from './datatype.mjs';
import { event } from './event.mjs';

function weatherdata (type, unit, value, time, place) {
    this.value = value;

    datatype.call(this, type, unit);
    //assigning mixin(concetenative inheritance)
    const eventSuper = event(time, place);
    Object.assign(this,eventSuper);

    this.getValue = function() {
        return this.value;
    }

    this.setValue = function(newValue) {
        this.value = newValue;
    }
}

export { weatherdata }

// weatherdata.prototype = Object.create(datatype.prototype);
// let wd = new weatherdata('temperature', 'C', 25, new Date(), 'Horsens, DK');
// console.log(wd.getType());
// console.log(wd.getTime());
// console.log(wd.getPlace());