import { datatype } from './datatype.mjs';
import { event } from './event.mjs';

function weatherprediction(type, unit, time, place, minValue, maxValue) {
    this.minValue = minValue;
    this.maxValue = maxValue;

    datatype.call(this,type, unit);
    //assigning mixin(concetenative inheritance)
    const eventSuper = event(time, place);
    Object.assign(this, eventSuper);

    this.getMinValue = function() {
        return this.minValue;
    }

    this.setMinValue = function(newMinValue) {
        this.minValue = newMinValue
    }

    this.getMaxValue = function() {
        return this.maxValue;
    }

    this.setMaxValue = function(newMaxValue) {
        this.maxValue = newMaxValue;
    }
}

export { weatherprediction }

// weatherprediction.prototype = Object.create(datatype.prototype);
// let wd = new weatherprediction('temperature', 'C', new Date(), 'Horsens, DK', 25, 30);
// console.log(wd.getType());
// console.log(wd.getMaxValue());