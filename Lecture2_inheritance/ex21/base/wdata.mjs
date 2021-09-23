import { Datatype } from './dT.mjs';

function weatherdata (type, value) {
    
   const dataTypeSuper = Datatype(type);

    function getValue() {
        return value;
    }

    return  {...dataTypeSuper, getValue}
}

let wd = weatherdata('mm', 63.5);
console.log(wd.getValue());
console.log(wd.getType());
wd.changeType();
console.log(wd.getType());

