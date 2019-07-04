export function getAPIData() {
    const url = "http://5d1c882df31e7f00147eb84f.mockapi.io/example";
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.table(data);
            return data;
        })
        .catch(error => new Error(error));
}