let num = 266219;
let mult = 1;
let numNew = 0;

while (num > 1) {

    numNew = num % 10;
    mult *= Math.floor(numNew);
    num = num / 10;

}
console.log(mult);



let multPow = mult ** 3;
console.log(multPow);
console.log(String(multPow).slice(0, 2));