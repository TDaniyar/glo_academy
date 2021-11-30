'use strict';

let rollback = 77;
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let screensNew = screens.toLowerCase();

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt("Сколько это будет стоить?");

let fullPrice = screenPrice+servicePrice1+servicePrice2
let otkat = fullPrice*0.1;
let servicePercentPrice = fullPrice - otkat;

const showTypeOf = function(variable){
    console.log(variable, typeof variable);
}

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else console.log("Что то пошло не так");

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(Math.ceil(servicePercentPrice));
console.log(screens.length);
console.log("Стоимость верстки экранов " + (screenPrice) + " рублей");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей");
console.log(screensNew.split());
console.log(fullPrice * (rollback / 100));
