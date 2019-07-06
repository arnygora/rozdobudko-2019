// export function fakeData() {
//     const url = 'http://5d1c882df31e7f00147eb84f.mockapi.io/objectsWithData';
//     return fetch(url)
//         .then(response => response.json())
//         .then(data => console.table(data))
//         .catch(new Error('error, data wasn\'t loaded' ))
// }
// fakeData();
// 4.  Есть массив в котором лежат объекты с датами, отсортировать по датам
const data = [
    {
        firstname: "Wilhelm Conrad",
        surname: "R\u00f6ntgen",
        born: "1845-03-27",
    }, {
        firstname: "Pieter",
        surname: "Zeeman",
        born: "1865-05-25",
    }, {
        firstname: "Antoine Henri",
        surname: "Becquerel",
        born: "1852-12-15",
    }, {
        firstname: "Marie",
        surname: "Curie, n\u00e9e Sklodowska",
        born: "1867-11-07",
    }, {
        firstname: "Lord Rayleigh",
        surname: "(John William Strutt)",
        born: "1842-11-12",
    }, {
        firstname: "Philipp Eduard Anton",
        surname: "von Lenard",
        born: "1862-06-07",
    }, {
        firstname: "Joseph John",
        surname: "Thomson",
        born: "1856-12-18",
    }, {
        firstname: "Gabriel",
        surname: "Lippmann",
        born: "1845-08-16",
    }, {
        firstname: "Albert Abraham",
        surname: "Michelson",
        born: "1852-12-19",
    }, {
        firstname: "Karl Ferdinand",
        surname: "Braun",
        born: "1850-06-06",
    }, {
        firstname: "Johannes Diderik",
        surname: "van der Waals",
        born: "1837-11-23",
    }, {
        firstname: "Wilhelm",
        surname: "Wien",
        born: "1864-01-13",
    }, {
        firstname: "Nils Gustaf",
        surname: "Dal\u00e9n",
        born: "1869-11-30",
    }, {}, {
        firstname: "Heike",
        surname: "Kamerlingh Onnes",
        born: "1853-09-21",
    }, {
        firstname: "Max",
        surname: "von Laue",
        born: "1879-10-09",
    }, {
        firstname: "Sir William Henry",
        surname: "Bragg",
        born: "1862-07-02",
    }, {
        firstname: "William Lawrence",
        surname: "Bragg",
        born: "1890-03-31",
    }, {
        firstname: "Charles Glover",
        surname: "Barkla",
        born: "1877-06-07",
    }, {
        firstname: "Max Karl Ernst Ludwig",
        surname: "Planck",
        born: "1858-04-23",
    }, {
        firstname: "Johannes",
        surname: "Stark",
        born: "1874-04-15",
    }, {
        firstname: "Charles Edouard",
        surname: "Guillaume",
        born: "1861-02-15",
    }, {
        firstname: "Albert",
        surname: "Einstein",
        born: "1879-03-14",
    }, {
        firstname: "Niels Henrik David",
        surname: "Bohr",
        born: "1885-10-07",
    }, {
        firstname: "Robert Andrews",
        surname: "Millikan",
        born: "1868-03-22",
    }, {
        firstname: "Karl Manne Georg",
        surname: "Siegbahn",
        born: "1886-12-03",
    }, {
        firstname: "James",
        surname: "Franck",
        born: "1882-08-26",
    }, {
        firstname: "Gustav Ludwig",
        surname: "Hertz",
        born: "1887-07-22",
    }
];

const formatDateToMilliseconds = (value) => new Date(value).valueOf();

function getSortedArray(data) {
    return data.sort((a, b) => formatDateToMilliseconds(a.born) > formatDateToMilliseconds(b.born) ? 1 : -1);
}

let result = getSortedArray(data);
console.log(result);


