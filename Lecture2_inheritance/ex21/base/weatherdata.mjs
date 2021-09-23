import { datatype } from './datatype.mjs';
import { event } from './event.mjs';

function weatherdata (type, unit, value, time, place) {
    const dataTypeSuper = datatype(type, unit);
    const eventSuper = event(time, place);

    function getValue() {
        return value;
    }

    function setValue(newValue) {
        value = newValue;
    }

    return {...dataTypeSuper, ...eventSuper, getValue, setValue}
}

export { weatherdata }


