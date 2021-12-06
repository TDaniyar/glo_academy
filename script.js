'use strict';


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,

    allServicePrices: 0,
    fullPrice: 0,
    rollback: 10,
    servicePercentPrice: 0,
    services: {},


    start: function () {
        appData.asking();
        appData.addPrice();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger(appData);
    },

    isNumber : function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    isText : function(someText) {
        let str = someText;
        let regexp = /^\s|^\d/;
        if (regexp.test(str) === true){
            return false;
        }else{
            return true;
        }
    },

    asking: function () {

        appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
        while (!appData.isText(appData.title)){
            appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
        }
        for (let i = 0; i < 2; i++) {
            let name = '';
            do {
                name = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные");
            } while (!appData.isText(name));

            let price = 0;
            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));

            appData.screens.push({id:i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?', 'Простые матрицы, Сложные матрицы');
            while (!appData.isText(name)){
                name = prompt('Какой дополнительный тип услуги нужен?', 'Простые матрицы, Сложные матрицы');
            }
            let price = 0;
            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));
            appData.services[name + " "+ i] = +price;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrice: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;

    }
        for (let key in appData.services){
            appData.allServicePrices += appData.services[key];

        }

    },

    getFullPrice : function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;

    },

    getServicePercentPrices : function () {
       appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },

    logger : function(funct){
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.title);
        console.log(appData.allServicePrices);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log(appData.services);
        console.log(appData.screens);
    }
};

appData.start();
