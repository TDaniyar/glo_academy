/* 
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
1). Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
a) через if,
b) через switch-case
c) через многомерный массив без ифов и switch.
2). У нас есть переменная namePerson. Если значение этой переменной “Артем” 
то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”,
с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
3). Запушить проект в репозиторий для усложненных заданий на GitHub
*/
let lang = prompt("Введите 'ru' или 'en':");
if (lang == 'ru') {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
}else if (lang == 'en'){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break
    case "en": 
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");   
        break
}

let ruArray = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let enArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

lang == 'ru'? console.log(String(ruArray)): console.log(String(enArray));


let namePerson = prompt("Please input the name: ");
namePerson === "Артем"? console.log("директор"): namePerson === "Александр"? console.log("преподаватель") : console.log("студент")
