<<<<<<< HEAD
// 1) Следующим переменным присвоить значения

let title = 'Домашнее задание'; //- строка с названием проекта,
let screens = ("Простые, Сложные, Интерактивные");
let screenPrice = 300; //- любое число,
const rollback = 77; //- любое число от 1 до 100,
let fullPrice = 1000; //- любое число (сколько хотите заработать),
let adaptive = true; //- булевое значение

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " + (screenPrice) + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей/долларов/гривен/юани");
let screensNew = screens.toLowerCase();
console.log(screensNew.split());
console.log(fullPrice * (rollback / 100));

/*
2) Используя методы и свойства:

Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
Вывести в консоль длину строки screens
Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
*/
=======
'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
>>>>>>> lesson03

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt("Сколько это будет стоить?");

<<<<<<< HEAD
//3) Проверить, чтобы все работало и не было ошибок в консоли 4) Добавить папку или ветку со вторым уроком в свой репозиторий на GitHub
=======
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt("Сколько это будет стоить?");

let fullPrice = screenPrice+servicePrice1+servicePrice2
let otkat = fullPrice*0.1;
let servicePercentPrice = fullPrice - otkat;
console.log(Math.ceil(servicePercentPrice));
if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else console.log("Что то пошло не так");
>>>>>>> lesson03
