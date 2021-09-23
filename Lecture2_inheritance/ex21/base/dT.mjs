function Datatype(type) {

    function getType() {
        return type;
    }

    function changeType() {
        type = 'oh yes';
    }

    return{ getType, changeType}
}

export { Datatype }


