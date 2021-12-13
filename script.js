'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value ");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

let total = document.getElementsByClassName('total-input')[0];
let totalCount = document.getElementsByClassName('total-input')[1];
let totalCountOther = document.getElementsByClassName('total-input')[2];
let fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,

    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    rollback: 10,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    isError: false,

    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.checkValues);
        buttonPlus.addEventListener('click', appData.addScreenBlock);

    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        console.log(appData);



        // appData.getServicePercentPrices();


        // appData.logger(appData);
        appData.showResult();
    },

    // isNumber : function (num) {
    //     return !isNaN(parseFloat(num)) && isFinite(num);
    // },
    // isText : function(someText) {
    //     let str = someText;
    //     let regexp = /^\s|^\d/;
    //     if (regexp.test(str) === true){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // },
    checkValues: function () {
        appData.isError = false;
        screens = document.querySelectorAll('.screen');

        screens.forEach(screen => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input[type=text]');

            if (select.value === '' || input.value === '') {
                appData.isError = true;
            }
        });
        if (!appData.isError) {
            appData.start();
        } else {
            alert('Заполни поля');
        }
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });


        });


    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });


    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },


    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;

        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];

        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);

        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
    },



    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

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
    },



    logger: function (funct) {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.title);
        console.log(appData.allServicePrices);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log(appData.services);
        console.log(appData.screens);
    }
};

appData.init();