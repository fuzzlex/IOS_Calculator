let resultEl = document.getElementById("result");

let counter1 = 0; 
let counter2 = 0;
let counter3 = 0; 
let counter4 = 0;
let counter5 = 0; 
let counter6 = 0; 
let counter7 = 0; 
let counter8 = 0;
let counter9 = 0; 
let counter0 = 0;
let clickco = 0;  

function cleane(){
    resultEl.innerHTML = 0;
}

function posnegfu(num1) {
    resultEl.innerHTML = -num1;
}
function divederFu(counter,num2) {
  
    resultEl.innerHTML = counter / num2;  
}
function multipyFu(num1,num2) {
    resultEl.innerHTML = num1 * num2; 
}
function plusFu(num1,num2) {
    resultEl.innerHTML = num1 + num2; 
}
function cıkarFu(num1,num2) {
    resultEl.innerHTML = num1 - num2;  
}
function sevenFu(){
    counter7 *= 10 ;
    if(counter7 == 0){
        resultEl.textContent = 7;
    }else {resultEl.textContent += (7 * counter7 + 7);}
    counter7++;
    clickco++;
}
function eigthFu(){
    counter8 *= 10 ;
    if(counter8 == 0){
        resultEl.textContent = 8;
    }else {resultEl.textContent += (8 * counter8 + 8);}
    counter8++;
}
function nineFu(){
    counter9 *= 10 ;
    if(counter9 == 0){
        resultEl.textContent = 9;
    }else {resultEl.textContent += (9 * counter9 + 9);}
    counter9++;
}
function fourFu(){
    counter4 *= 10 ;
    if(counter4 == 0){
        resultEl.textContent = 4;
    }else {resultEl.textContent += (4 * counter4 + 4);}
    counter4++;
}
function fiveFu(){
    counter5 *= 10 ;
    if(counter5 == 0){
        resultEl.textContent = 5;
    }else {resultEl.textContent += (5 * counter5 + 5);}
    counter5++;
}
function sixFu(){
    counter6 *= 10 ;
    if(counter6 == 0){
        resultEl.textContent = 6;
    }else {resultEl.textContent += (6 * counter6 + 6);}
    counter6++;
}
function oneFu(){
    counter1 *= 10 ;
    if(counter1 == 0){
        resultEl.textContent = 1;
    }else {resultEl.textContent += (1 * counter1 + 1);}
    counter1++;
}
function twoFu(){
    counter2 *= 10 ;
    if(counter2 == 0){
        resultEl.textContent = 2;
    }else {resultEl.textContent += (2 * counter2 + 2);}
    counter2++;
}
function threeFu(){
    counter3 *= 10 ;
    if(counter3 == 0){
        resultEl.textContent = 3;
    }else {resultEl.textContent += (3 * counter3 + 3);}
    counter3++;
}
function zeroFu(){
    counter0 *= 10 ;
    if(counter0 == 0){
        resultEl.textContent = 0;
    }else {resultEl.textContent += (0 * counter0+ 0);}
    counter0++;
}


