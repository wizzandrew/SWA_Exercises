function event(time, place) {

    function getTime() {
        let curr_date = time.getDate();
        let curr_month = time.getMonth() + 1; //Months are zero based
        let curr_year = time.getFullYear();
        let date = `${curr_date}/${curr_month}/${curr_year}`;
        return date;
    }

    function getPlace() {
        return place;
    }

    return { getTime, getPlace }
}

export { event }

