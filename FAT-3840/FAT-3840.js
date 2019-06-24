// # Вывести текущий месяц по-русски (Украински, как пожелаешь)
const showMonth = function () {
    const date = new Date().getMonth();

    switch (date) {
        case 0:
            return 'Січень';
            break;
        case 1:
            return 'Лютий';
            break;
        case 2:
            return 'Березень';
            break;
        case 3:
            return 'Квітень';
            break;
        case 4:
            return 'Травень';
            break;
        case 5:
            return 'Червень';
            break;
        case 6:
            return 'Липень';
            break;
        case 7:
            return 'Серпень';
            break;
        case 8:
            return 'Вересень';
            break;
        case 9:
            return 'Жовтень';
            break;
        case 10:
            return 'Листопад';
            break;
        case 11:
            return 'Грудень';
            break;
        default:
            throw new Error('something went wrong')
    }
};
console.log(showMonth());

// # Вывести текущую дату, если месяц или день состоит из одной цифры - добавить 0 впереди
const showDate = function () {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();

    function validateData(data) {
        if (data.toString().length < 2) {
            return `0${data}`
        }
        return data;
    }
    return `${validateData(day)}.${validateData(month + 1)}`
};
console.log(showDate());

// # Есть поле ввода текста, туда вводим дату, при клике на кнопку "Посчитать", покажет сколько дней осталось до дня рождения
const moment = require('moment');

const calculateDaysToBirthday = function () {
    const enteredData = '2019-07-13';
    const convertedData = moment(enteredData);
    const nowDate = moment();
    return convertedData.diff(nowDate, 'days');
};
console.log(calculateDaysToBirthday());