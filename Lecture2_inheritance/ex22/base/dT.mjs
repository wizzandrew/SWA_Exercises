function Datatype(type) {
    this.type = type;

    this.getType = function () {
        return this.type;
    }

    this.toString = function() {
        return `Type:${this.type}`;
    }
}

export { Datatype }