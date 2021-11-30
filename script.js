'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let screensNew = screens.toLowerCase();

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt("Сколько это будет стоить?");

//let fullPrice = screenPrice+servicePrice1+servicePrice2
//let rollback = fullPrice*0.1;
//let servicePercentPrice = fullPrice - rollback;


const showTypeOf = function(variable){
    console.log(variable, typeof variable);
}

const getAllServicePrices = function() {
    return servicePrice1+servicePrice2
}
let allServicePrices = getAllServicePrices()

function getFullPrice () {
    return screenPrice + allServicePrices
}
let fullPrice = getFullPrice ();

function getRollback () {
    return fullPrice*0.1
}
let rollback = getRollback(fullPrice);

const getServicePercentPrices = function(){
    return fullPrice - rollback
}
let servicePercentPrice = getServicePercentPrices();

function getRollbackMessage(price) {
    if (price > 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%";
    } else if (price <= 15000 && fullPrice > 0) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
}

const getTitle = function (str) {
    let str1 = str.trim()
    let string = str1.toLowerCase()
    let newTitle = string[0].toUpperCase() + string.slice(1);
    return newTitle
}

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(getTitle(title));
console.log(screens.length);
console.log("Стоимость верстки экранов " + (screenPrice) + " рублей");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей");
console.log(screensNew.split(" "));
console.log(fullPrice * (rollback / 100));
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());
