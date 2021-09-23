import { Datatype } from './dT.mjs';

function weatherdata(type, value) {
    this.value = value;

    Datatype.call(this, type);

    this.getValue = function () {
        return this.value;
    }

    this.toString = function() {
        //let t = Datatype.toString.call(this);
        return `Type:${this.type} Value:${this.value};`
    }
}

weatherdata.prototype = Object.create(Datatype.prototype);
let wd = new weatherdata('temperature', 25);
console.log(wd.getValue());
console.log(wd.getType());
console.log(wd.toString());
