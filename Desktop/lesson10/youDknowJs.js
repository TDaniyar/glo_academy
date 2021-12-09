'use strict';

const sequence = document.querySelectorAll('div');
console.log(sequence);


sequence[0].before(sequence[1]);
sequence[5].after(sequence[2]);
sequence[3].before(sequence[4]);

const chapter3 = sequence[4].querySelector('[target = "_blank"]');
chapter3.textContent = "Книга 3. this и Прототипы Объектов";

sequence[6].remove();

const chapter2 = sequence[0].querySelectorAll("li");
chapter2[1].after(chapter2[3]);
chapter2[3].after(chapter2[6]);
chapter2[6].after(chapter2[8]);
chapter2[8].after(chapter2[4]);
chapter2[4].after(chapter2[5]);
chapter2[5].after(chapter2[7]);
chapter2[7].after(chapter2[9]);


const chapter5 = sequence[5].querySelectorAll('li');
chapter5[1].after(chapter5[9]);
chapter5[9].after(chapter5[3]);
chapter5[3].after(chapter5[4]);
chapter5[4].after(chapter5[2]);
chapter5[2].after(chapter5[6]);
chapter5[6].after(chapter5[7]);

const chapter68 = document.createElement('li');
chapter68.textContent = 'Глава 8: За пределами ES6';
const chapter6 = sequence[2].querySelector('ul');
chapter6.append(chapter68);

const chapter61 = sequence[2].querySelectorAll('li');
chapter61[8].after(chapter61[10]);



//   background-image: url(./image/open_book.jpg);
const image = document.getElementById('background-image');
console.log(image);
