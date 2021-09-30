class datatype {
    constructor(type, unit) {
        this.type = type;
        this.unit = unit;
        //Object.freeze(this);
    }

    getType() {
        return this.type;
    }

    getUnit() {
        return this.unit;
    }
}

export { datatype }

// //test
// let d = new datatype('temperature', 'C');
// console.log(d.getType());
// d.getType = () => {return 'type'};
// console.log(d.getType());