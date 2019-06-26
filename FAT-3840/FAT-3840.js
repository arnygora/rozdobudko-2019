// # Вывести текущий месяц по-русски (Украински, как пожелаешь)
const showMonth = function () {
    const currentMonth = new Date().getMonth();

    const getMonth = {
        0: 'Січень',
        1: 'Лютий',
        2: 'Березень',
        3: 'Квітень',
        4: 'Травень',
        5: 'Червень',
        6: 'Липень',
        7: 'Серпень',
        8: 'Вересень',
        9: 'Жовтень',
        10: 'Листопад',
        11: 'Грудень',
    };

    return getMonth[currentMonth]
};

console.log(showMonth());

// # Вывести текущую дату, если месяц или день состоит из одной цифры - добавить 0 впереди
const showDate = function () {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();

    function validateData(enteredDateFromUser) {
        if (enteredDateFromUser.toString().length < 2) {

            return `0${enteredDateFromUser}`
        }

        return enteredDateFromUser;
    }

    return `${validateData(day)}.${validateData(month + 1)}`
};

console.log(showDate());

// # Есть поле ввода текста, туда вводим дату, при клике на кнопку "Посчитать", покажет сколько дней осталось до дня рождения
// const moment = require('moment');

calculateDaysToBirthday = () => {
    const enteredData = '2019-07-13';
    const convertedData = moment(enteredData);
    const nowDate = moment();

    return convertedData.diff(nowDate, 'days');
};

console.log(calculateDaysToBirthday());