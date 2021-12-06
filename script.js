'use strict';


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

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();

        appData.logger(appData);
    },
    isNumber : function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные");
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
        }
        while (!appData.isNumber(appData.screenPrice) || appData.screenPrice === 0);

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        appData.screensNew = appData.screens.toLowerCase();
    },

    getAllServicePrices : function () {
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
    },

    getFullPrice : function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices : function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getRollbackMessage : function (price) {
        if (price > 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price <= 15000 && price > 0) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },

    getTitle : function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },

    logger : function(funct){
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.title);
        console.log(appData.allServicePrices);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        for (let key in funct){
            console.log(key, funct[key]);
        }

    }
};

appData.start();
