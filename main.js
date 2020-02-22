let stickerVariable = document.querySelector("#stickerVariable");
let btnLeft = document.querySelector(".interfaceQuant .left");
let btnFooter = document.querySelector("footer button");
let sucessMsg = document.querySelector("footer p");

//Lógica do botão de subtração
document.querySelector("#btnSub").addEventListener("click", function sub() {
    //value é o valor da stickerVariable;
    let value = parseInt(stickerVariable.value);
    //value retorna isNan caso seja negativo, pra evitar isso é feito esse for pra zerar o value;
    value = isNaN(value) ? 0 : value;
    //if checando se o value é menor que 1, caso sim altera no estilo e altera o valor pra 0 pra corrigir bug;
    if (value <= 0) {
        //altera cor pro caso erro
        stickerVariable.style.backgroundColor = '#F59393';
        stickerVariable.style.border = '1px solid red';
    } else {
        //caso o value seja maior que o valor Mínimo, aí tem a subtração;
        value--;
    }
    //É atribuido o novo valor a variável sticker;
    stickerVariable.value = value;
});

//Logica do botão de adição
document.querySelector("#btnAdd").addEventListener("click", function add(valorMaximo) {
    let value = parseInt(stickerVariable.value);
    value = isNaN(value) ? 0 : value;
    //essa alteração no estilo é pra retornar a cor normal;
    stickerVariable.style.backgroundColor = '#dde3e9';
    stickerVariable.style.border = '1px solid #2f3676';
    if (value >= valorMaximo) {
        value = valorMaximo;
    } else {
        value++;
    }
    stickerVariable.value = value;
});

//Resultado e validação de formulário
btnFooter.onclick = function resultado() {
    const valor = parseInt(stickerVariable.value);
    let obs = document.querySelector("#observe");

    let chkReact = document.querySelector("#chkReact");
    let chkVue = document.querySelector("#chkVue");
    let chkAngular = document.querySelector("#chkAngular");

    let arr = [chkReact, chkVue, chkAngular];

    //verificar checkboxes
    let marcados = arr.filter(function(item) {
        return item.checked === true;
    });
    let nomes = marcados.map(function(item) {
        return item.name;
    });

    //Validação do formulário
    if (marcados.length == 0 || valor <= 0) {
        //se nenhum checkbox estiver marcado ou o valor desejado ser 0, retorna a mensagem abaixo:
        alert("Não vai pedir nada?");
        btnFooter.disabled = true;
    }
    if (valor > 0 && marcados.length > 0) {
        //desabilita o botão e chama um alerta explicando o pedido;
        alert("Você pediu " + valor + " sticker(s) de " + nomes.join("/ "));
        sucessMsg.innerHTML = "Formulário enviado com sucesso!";
        btnFooter.disabled = true;
    }
    //caso tenha alguma observação, é mostrado também!
    if (obs.value.length > 0 && valor > 0 && marcados.length > 0) {
        alert("Com as seguintes observações: " + obs.value);
    }

    setTimeout(function zerar() {
        sucessMsg.innerHTML = "";
        stickerVariable.value = 0;
        obs.value = "";
        arr.forEach(element => {
            element.checked = false;
        });
        btnFooter.disabled = false;
    }, 3000);
};