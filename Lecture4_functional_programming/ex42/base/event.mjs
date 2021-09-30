class event {
    constructor(time, place) {
        this.time = time;
        this.place = place;
        //Object.freeze(this);
    }

    getTime() {
        return this.time;
    }

    getPlace() {
        return this.place;
    }
}

export { event }

