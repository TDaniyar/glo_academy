'use strict';

let title
let screens
let screenPrice
let adaptive
let screensNew

let allServicePrices
let fullPrice
let rollback
let servicePercentPrice
let service1
let service2

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt('Как называется ваш проект?', "Калькулятор верстки")
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные")
    do {
    screenPrice = +prompt('Сколько будет стоить данная работа?')
    }
    while (!isNumber(screenPrice) || screenPrice == 0)

    adaptive = confirm('Нужен ли адаптив на сайте?')
    screensNew = screens.toLowerCase()
}

const getAllServicePrices = function() {
    let sum = 0
    for (let i=0; i<2; i++){
        if (i===0){
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Простые матрицы')
        } else if(i===1){
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Сложные матрицы');
        }
        sum += +prompt("Сколько это будет стоить?")
        while (!isNumber(sum)){
            sum = +prompt("Сколько это будет стоить?")
        }
    }
    return sum
}

const showTypeOf = function(variable){
    console.log(variable, typeof variable);
}

function getFullPrice () {
    return screenPrice + allServicePrices
}

function getRollback () {
    return fullPrice*0.1
}

const getServicePercentPrices = function(){
    return fullPrice - rollback
}

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
asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice ();
rollback = getRollback(fullPrice);
servicePercentPrice = getServicePercentPrices();

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(allServicePrices)
console.log(getTitle(title));
console.log(screens.length);
console.log("Стоимость верстки экранов " + (screenPrice) + " рублей");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей");
console.log(screensNew.split(" "));
console.log(fullPrice * (rollback / 100));
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());

