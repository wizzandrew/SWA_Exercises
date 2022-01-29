async function getData(url) {
    return await fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        }

        return response.json().then(err => {
            const e = new Error('Smth went wrong');
            e.data = err;
            throw e;
            })
    })
}

getData('http://localhost:8080/data')
.then(data => console.log(data))
.catch(err => console.log(err));