// Referência pra criar esse botão http://jsfiddle.net/linhadecomando/otp2owv7/

var fundoInp = document.querySelector('#numStick');

function add(valorMaximo){
    var value = parseInt(document.querySelector('#numStick').value);
    
    value = isNaN(value) ? 0: value;
    if(value >= valorMaximo){
        value = valorMaximo;
    } 
    else{
        value++;
        fundoInp.style.backgroundColor='#dde3e9';
        fundoInp.style.border='1px solid #2f3676'
    }
    document.querySelector('#numStick').value = value;
}

function sub(valorMinimo){
    var value = parseInt(document.querySelector('#numStick').value,0);
    
    value = isNaN(value) ? 0: value;
    if(value <= valorMinimo){
        value = valorMinimo;
        fundoInp.style.backgroundColor='#F59393';
        fundoInp.style.border='1px solid red';
    } 
    else{
        value--;
    }
    document.querySelector('#numStick').value = value;
}

