import { datatype } from './datatype.mjs';
import { event } from './event.mjs';

function weatherprediction(type, unit, time, place, minValue, maxValue) {
    const dataTypeSuper = datatype(type, unit);
    const eventSuper = event(time, place);

    function getMinValue() {
        return minValue;
    }

    function setMinValue(newMinValue) {
        minValue = newMinValue
    }

    function getMaxValue() {
        return maxValue;
    }

    function setMaxValue(newMaxValue) {
        maxValue = newMaxValue;
    }

    return { ...dataTypeSuper, ...eventSuper, getMinValue, setMinValue, getMaxValue, setMaxValue }
}

export { weatherprediction }