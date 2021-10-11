let resultEl = document.getElementById("result");


let clickco = 0;  
let topl = 0;
let sonuc = 0;
let sonuc1 = 0;
let sonuc2 = 0;
let funcoun = 0;
let zeroFind = 0;
let dotclick = 0;
let toplO = 0;

function cleane(){
    resultEl.innerHTML = 0;
    topl = 0;
    clickco = 0;
    sonuc = 0;
    sonuc1 = 0;
    sonuc2 = 0;
    funcoun = 0;
    zeroFind = 0;
    dotclick = 0; 
    toplO = 0;  
    
}
function funCleaner() {
    topl = 0;
    clickco = 0;
    zeroFind = 0; 
    dotclick = 0; 
   
  
}
function numreversed(num) {
    let n = 0;
    reverse = 0;
    n=Number(num,0);
    let reservednum = (Number(String(Math.abs(n)).split('').reverse().join(''))); 
    return reservednum;
}

function posnegfu(num1) {
    resultEl.innerHTML = -num1;
}
function divederFu() {
    if(zeroFind == 1){
        funcoun += 1;
        topl += toplO;
        if (funcoun == 1){sonuc1 += topl;}
        else{sonuc2 += topl; 
            let sonuc = sonuc1 / sonuc2;
            resultEl.textContent = sonuc; }
        funCleaner();
        toplO = 0;
  
    }else {let  newTopl1 = numreversed(topl)
        funCleaner();
        newTopl1 += toplO;
        funcoun += 1;
        if (funcoun == 1){sonuc1 += newTopl1;}
        else{sonuc2 += newTopl1; 
        let sonuc = sonuc1 / sonuc2;
        resultEl.textContent = sonuc; }
        toplO = 0;
    }
  
}
function multipyFu() {
    if(zeroFind == 1){
        funcoun += 2;
        topl += toplO;
        if (funcoun == 2){sonuc1 += topl;}
        else{sonuc2 += topl; 
            let sonuc = sonuc1 * sonuc2 ;
            resultEl.textContent = sonuc; }
        funCleaner();
        toplO = 0;

  
    }else {let  newTopl1 = numreversed(topl);
        funCleaner();
        console.log(toplO);
        newTopl1 += toplO;
        funcoun += 2;
        if (funcoun == 2){sonuc1 += newTopl1;}
        else{sonuc2 += newTopl1; 
        let sonuc = sonuc1 * sonuc2 ;
        resultEl.textContent = sonuc; }
        toplO = 0;
    }
}
function plusFu() {
    if(zeroFind == 1){
        funcoun += 4;
        topl += toplO;
        if (funcoun == 4){sonuc1 += topl;}
        else{sonuc2 += topl; 
            let sonuc = sonuc1 + sonuc2;
            resultEl.textContent = sonuc; }
        funCleaner();
        toplO = 0;

  
    }else {let  newTopl1 = numreversed(topl)
        funCleaner();
        newTopl1 += toplO;
        funcoun += 4;
        if (funcoun == 4){sonuc1 += newTopl1;}
        else{sonuc2 += newTopl1; 
        let sonuc = sonuc1 + sonuc2;
        resultEl.textContent = sonuc; }
        toplO = 0;

    }
    
}
function cıkarFu() {
    if(zeroFind == 1){
        funcoun += 6;
        topl += toplO;
        console.log(topl)
        if (funcoun == 6){sonuc1 += topl;}
        else{sonuc2 += topl; 
            let sonuc = sonuc1 - sonuc2;
            resultEl.textContent = sonuc; }
        funCleaner();
        toplO = 0;
  
    }else {let  newTopl1 = numreversed(topl)
        funCleaner();
        newTopl1 += toplO;
        funcoun += 6;
        if (funcoun == 6){sonuc1 += newTopl1;}
        else{sonuc2 += newTopl1; 
        let sonuc = sonuc1 - sonuc2;
        resultEl.textContent = sonuc; }
        toplO = 0;
    }
   
}
function dotFu() {
    if(clickco == 0){resultEl.textContent += ","; zeroFind = 1; toplO *= 0.1;}
    else if(topl % 10 == 0){resultEl.textContent += ","; zeroFind = 1; }
    else {resultEl.textContent += ",";}
    dotclick = 1;
    clickco = 1;
    toplO = 0;
}

function sevenFu(){
    if(clickco == 0){resultEl.textContent = 7; topl += 7;}
    else if(dotclick == 1){resultEl.textContent += 7; toplO += 7 * 10 ** (-clickco)}
    else if(topl % 10 == 0){resultEl.textContent += 7; zeroFind = 1; topl = (topl * 10) + 7}
    else {resultEl.textContent += 7; topl += (7 * 10 ** clickco);}
    clickco++;
  
}

function eigthFu(){
    if(clickco == 0){resultEl.textContent = 8; topl += 8;}
    else if(dotclick == 1){resultEl.textContent += 8; toplO = toplO + 8 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 8; zeroFind = 1; topl = (topl * 10) + 8}
    else {resultEl.textContent += 8; topl += (8 * 10 ** clickco);}
    clickco++;
}

function nineFu(){
    if(clickco == 0){resultEl.textContent = 9; topl += 9;}
    else if(dotclick == 1){resultEl.textContent += 9; toplO = toplO + 9 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 9; zeroFind = 1; topl = (topl * 10) + 9}
    else {resultEl.textContent += 9; topl += (9 * 10 ** clickco);}
    clickco++;
}

function fourFu(){
    if(clickco == 0){resultEl.textContent = 4; topl += 4;}
    else if(dotclick == 1){resultEl.textContent += 4; toplO = toplO + 4 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 4; zeroFind = 1; topl = (topl * 10) + 4}
    else {resultEl.textContent += 4; topl += (4 * 10 ** clickco);}
    clickco++;
}
function fiveFu(){
    if(clickco == 0){resultEl.textContent = 5; topl += 5;}
    else if(dotclick == 1){resultEl.textContent += 5; toplO = toplO + 5 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 5; zeroFind = 1; topl = (topl * 10) + 5}
    else {resultEl.textContent += 5; topl += (5 * 10 ** clickco);}
    clickco++;
}
function sixFu(){
    if(clickco == 0){resultEl.textContent = 6; topl += 6;}
    else if(dotclick == 1){resultEl.textContent += 6; toplO = toplO + 6 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 6; zeroFind = 1; topl = (topl * 10) + 6}
    else {resultEl.textContent += 6; topl += (6 * 10 ** clickco);}
    clickco++;
}
function oneFu(){
    if(clickco == 0){resultEl.textContent = 1; topl += 1;}
    else if(dotclick == 1){resultEl.textContent += 1; toplO = toplO + 1 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 1; zeroFind =1; topl = (topl * 10) + 1}
    else {resultEl.textContent += 1; topl += (1 * 10 ** clickco);}
    clickco++;
}
function twoFu(){
    if(clickco == 0){resultEl.textContent = 2; topl += 2;}
    else if(dotclick == 1){resultEl.textContent += 2; toplO = toplO + 2 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 2; zeroFind = 1; topl = (topl * 10) + 2}
    else {resultEl.textContent += 2; topl += (2 * 10 ** clickco);}
    clickco++;
}
function threeFu(){
    if(clickco == 0){resultEl.textContent = 3; topl += 3;}
    else if(dotclick == 1){resultEl.textContent += 3; toplO = toplO + 3 * 10 ** -clickco }
    else if(topl % 10 == 0){resultEl.textContent += 3; zeroFind = 1; topl = (topl * 10) + 3}
    else {resultEl.textContent += 3; topl += (3 * 10 ** clickco);}
    clickco++;
}
function zeroFu(){
    if(clickco == 0){resultEl.textContent = 0; topl += 0;}
    else if(topl % 10 == 0){resultEl.textContent += 0; zeroFind = 1; topl *= 10}
    else {resultEl.textContent += 0;topl = numreversed(topl) ;  topl *= 10 ;}
    console.log(topl)
    clickco++;
}

function equalFu() {
    if (funcoun == 1 ){divederFu();}
    else if(funcoun == 2){multipyFu();} 
    else if(funcoun == 4){plusFu();}
    else if(funcoun == 6){cıkarFu();}
}
