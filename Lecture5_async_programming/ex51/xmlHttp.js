function getData(method, url) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open(method, url);
        http.send();
        http.onerror = () => {
            reject(http.response)
        }
        http.onload = () => {
            if(http.status != 200) {
                reject(http.response)
            }
            resolve(http.response)
        }
    })
}

getData('GET', 'http://localhost:8080/data')
.then(data => console.log(JSON.parse(data)))
.catch(err => console.log(err));