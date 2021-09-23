function datatype(type, unit) {
    this.type = type;
    this.unit = unit;
    
    this.getType = function() {
        return this.type;
    }

    this.setType = function(newType) {
        this.type = newType;
    }

    this.getUnit = function() {
        return this.unit;
    }

    this.setUnit = function(newUnit) {
        this.unit = newUnit;
    }
}

export { datatype }