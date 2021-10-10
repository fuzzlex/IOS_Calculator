let resultEl = document.getElementById("result");


let clickco = 0;  
let topl = 0;
let sonuc = 0;

function cleane(){
    resultEl.innerHTML = 0;
    topl = 0;
    clickco = 0;
    sonuc = 0;
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
function plusFu() {
    let n = 0;
    reverse = 0;
   

    
    n=Number(topl,0);
    let newTopl1 = (Number(String(Math.abs(n)).split('').reverse().join(''))); 
    topl = 0;
    clickco = 0;

    sonuc += newTopl1;

    resultEl.textContent = sonuc; 
    
}
function cıkarFu(num1,num2) {
    resultEl.innerHTML = num1 - num2;  
}
function sevenFu(){
    if(clickco == 0){resultEl.textContent = 7; topl += 7;}else {resultEl.textContent += 7; topl += (7 * 10 ** clickco);}
    clickco++;
  
}

function eigthFu(){
    if(clickco == 0){resultEl.textContent = 8; topl += 8;}else {resultEl.textContent += 8; topl += (8 * 10 ** clickco);}
    clickco++;
}

function nineFu(){
    if(clickco == 0){resultEl.textContent = 9; topl += 9;}else {resultEl.textContent += 9; topl += (9 * 10 ** clickco);}
    clickco++;
}

function fourFu(){
    if(clickco == 0){resultEl.textContent = 4; topl += 4;}else {resultEl.textContent += 4; topl += (4 * 10 ** clickco);}
    clickco++;
}
function fiveFu(){
    if(clickco == 0){resultEl.textContent = 5; topl += 5;}else {resultEl.textContent += 5; topl += (5 * 10 ** clickco);}
    clickco++;
}
function sixFu(){
    if(clickco == 0){resultEl.textContent = 6; topl += 6;}else {resultEl.textContent += 6; topl += (6 * 10 ** clickco);}
    clickco++;
}
function oneFu(){
    if(clickco == 0){resultEl.textContent = 1; topl += 1;}else {resultEl.textContent += 1; topl += (1 * 10 ** clickco);}
    clickco++;
}
function twoFu(){
    if(clickco == 0){resultEl.textContent = 2; topl += 2;}else {resultEl.textContent += 2; topl += (2 * 10 ** clickco);}
    clickco++;
}
function threeFu(){
    if(clickco == 0){resultEl.textContent = 3; topl += 3;}else {resultEl.textContent += 3; topl += (3 * 10 ** clickco);}
    clickco++;
}
function zeroFu(){
    if(clickco == 0){resultEl.textContent = 0; topl += 0;}else {resultEl.textContent += 0; topl += (0 * 10 ** clickco);}
    clickco++;
}



