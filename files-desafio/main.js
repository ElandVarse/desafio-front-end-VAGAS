// Referência pra criar esse botão http://jsfiddle.net/linhadecomando/otp2owv7/
let fundoInp = document.querySelector('#numStick');

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
function resultado(){
    var valor = document.querySelector('#numStick').value;
    var obs = document.querySelector('#observe').value;

    let chkReact = document.querySelector('#chkReact');
    let chkVue = document.querySelector('#chkVue');
    let chkAngular = document.querySelector('#chkAngular');
    
    const arr = [chkReact, chkVue, chkAngular];

    const marcados = arr.filter((item) => {
        return item.checked===true;
    }) 

    const nomes = marcados.map((item) => {
        return item.name;
    }) 
//Validação do formulário
    if (marcados.length==0 || valor==0)
    {
        alert('Não vai pedir nada?')
    } 
    else {
        console.log('Você pediu ' + valor + ' sticker(s) de ' + nomes);
        alert('Você pediu ' + valor + ' sticker(s) de ' + nomes.join('/ '));
    if (obs===''){
    } else{
        console.log('Com as seguintes observações: ' + obs);
        alert('Com as seguintes observações: ' + obs);
    }
    }

}
    
