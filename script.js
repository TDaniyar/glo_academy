'use strict';

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let screensNew;

// let allServicePrices;
// let fullPrice;
// let rollback;
// let servicePercentPrice;
// let service1;
// let service2;

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    screensNew: '',

    allServicePrices: 0,
    fullPrice: 0,
    rollback: 10,
    servicePercentPrice: 0,
    service1: '',
    service2: '',

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }



};

const start = {
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные");
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
        }
        while (!appData.isNumber(appData.screenPrice) || appData.screenPrice === 0);

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        appData.screensNew = appData.screens.toLowerCase();
    }
};


// const isNumber = function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
// };


const newSumObject = {
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Простые матрицы');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Сложные матрицы');
            }
            sum += +prompt("Сколько это будет стоить?");
            while (!appData.isNumber(sum)) {
                sum = +prompt("Сколько это будет стоить?");
            }
        }
        return sum;
    }
};

// const showTypeOf = function (variable) {
//     console.log(variable, typeof variable);
//};
const newFullPrice = {
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    }
};

const newServicePercentPrice = {
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    }
};
const newRollbackMessage = {
    getRollbackMessage: function (price) {
        if (price > 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price <= 15000 && price > 0) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    }
};
const newGetTitle = {
    getTitle: function () {
        // let str1 = str.trim();
        // let string = str1.toLowerCase();
        // let newTitle = string[0].toUpperCase() + string.slice(1);
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    }
};
start.asking();
appData.allServicePrices = newSumObject.getAllServicePrices();
appData.fullPrice = newFullPrice.getFullPrice();
appData.servicePercentPrice = newServicePercentPrice.getServicePercentPrices();
appData.title = newGetTitle.getTitle();

// showTypeOf(title);
// showTypeOf(fullPrice);
// showTypeOf(adaptive);

// console.log(allServicePrices);
// console.log(getTitle(title));
// console.log(screens.length);
// console.log("Стоимость верстки экранов " + (screenPrice) + " рублей");
// console.log("Стоимость разработки сайта " + (fullPrice) + " рублей");
// console.log(screensNew.split(" "));
// console.log(rollback);
// console.log(getRollbackMessage(fullPrice));
// console.log(servicePercentPrice);
console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
console.log(appData.title);
console.log(appData.allServicePrices);