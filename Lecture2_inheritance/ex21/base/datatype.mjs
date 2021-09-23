function datatype(type, unit) {
    
    function getType() {
        return type;
    }

    function setType(newType) {
        type = newType;
    }

    function getUnit() {
        return unit;
    }

    function setUnit(newUnit) {
        unit = newUnit;
    }

    return{getType, setType, getUnit, setUnit}
}

export { datatype }

