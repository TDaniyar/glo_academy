
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
