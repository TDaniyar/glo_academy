'use strict';

/*
9) Объявить переменную servicePercentPrice и занести в нее 
итоговую стоимость за вычетом отката посреднику 
(servicePercentPrice = fullPrice - Откат посреднику), 
округлив результат в большую сторону (методы объекта Math в помощь). 
Вывести servicePercentPrice в консоль.
*/
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt("Сколько это будет стоить?");

let fullPrice = screenPrice+servicePrice1+servicePrice2
let otkat = fullPrice*0.1;
let servicePercentPrice = fullPrice - otkat;
console.log(Math.ceil(servicePercentPrice));
if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else console.log("Что то пошло не так");