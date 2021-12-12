'use strict';

const btn = document.getElementById("btn");
const text = document.querySelector("[type=text]");
const square = document.querySelector("#square");
const circleButton = document.querySelector("#e_btn");
const circle = document.querySelector("#circle");
const range = document.getElementById('range');

const buttonClick = function(event) {
    const collor = function(element) {
        square.style.backgroundColor = text.value;
    };
    btn.addEventListener('click', collor);

};

text.addEventListener("mousedown", buttonClick);
circleButton.style.display = "none";

const rangeChange = function(event){
    circle.style.height = range.value;
};
range.addEventListener("input", rangeChange);
range.addEventListener("change", rangeChange);
console.dir(circle);