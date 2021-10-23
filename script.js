let resultEl = document.getElementById("result");
let numberEL = document.querySelectorAll(".number")


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

 function divederFu() {
    if(zeroFind == 1){
        funcoun += 1;
        topl += toplO;
        if (funcoun == 1){sonuc1 += topl;}
        else{sonuc2 += topl; 
            let sonuc = sonuc1 / sonuc2;
            resultEl.textContent = sonuc.toFixed(5); }
        funCleaner();
        toplO = 0;
  
    }else {let  newTopl1 = numreversed(topl)
        funCleaner();
        newTopl1 += toplO;
        funcoun += 1;
        if (funcoun == 1){sonuc1 += newTopl1;}
        else{sonuc2 += newTopl1; 
        let sonuc = sonuc1 / sonuc2;
        resultEl.textContent = sonuc.toFixed(5); }
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
        console.log(topl)
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

numberEL.forEach(function(element){
    element.onclick = function(){
        if(clickco == 0){resultEl.textContent = Number(this.textContent); topl += Number(this.textContent);}
        else if(dotclick == 1){resultEl.textContent += Number(this.textContent); toplO += Number(this.textContent) * 10 ** (-clickco);}
        else if(topl % 10 == 0 || Number(this.textContent) != 0  ){resultEl.textContent += Number(this.textContent); zeroFind = 1; topl = (topl * 10) + Number(this.textContent);}
        else if(topl % 10 == 0 || Number(this.textContent) == 0 ){resultEl.textContent += 0; zeroFind = 1; topl *= 10 ;console.log(topl)}
        else if(Number(this.textContent) == 0 ){resultEl.textContent += 0;topl = numreversed(topl) ;  topl *= 10 ;}
        else {resultEl.textContent += Number(this.textContent); topl += (Number(this.textContent) * 10 ** clickco);}
        clickco++;
    }
});




function equalFu() {
    if (funcoun == 1 ){divederFu();}
    else if(funcoun == 2){multipyFu();} 
    else if(funcoun == 4){plusFu();}
    else if(funcoun == 6){cıkarFu();}
}
