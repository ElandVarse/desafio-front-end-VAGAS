let stickerVariable = document.querySelector('#stickerVariable');

//Lógica do botão de subtração
document.querySelector("#btnSub").addEventListener("click", function sub(valorMinimo) {
	valorMinimo = 0;
	//value é o valor da stickerVariable;
	let value = parseInt(document.querySelector('#stickerVariable').value);
	//value retorna isNan caso seja negativo, pra evitar isso é feito esse for pra zerar o value;
	value = isNaN(value) ? 0 : value;
	//if checando se o value é menor que o valor mínimo(0), caso sim altera no estilo;
	if (value <= valorMinimo) {
		stickerVariable.style.backgroundColor = '#F59393';
		stickerVariable.style.border = '1px solid red';
	} else {
		//caso o value seja maior que o valor Mínimo, aí tem a subtração;
		value--;
	}
	//É atribuido o novo valor a variável sticker;
	document.querySelector('#stickerVariable').value = value;
});

//Logição do botão de adição
document.querySelector("#btnAdd").addEventListener("click", function add(valorMaximo) {
	let value = parseInt(document.querySelector('#stickerVariable').value);
	value = isNaN(value) ? 0 : value;
	//essa alteração no estilo é pra retornar o visual ao normal;
	stickerVariable.style.backgroundColor = '#dde3e9';
	stickerVariable.style.border = '1px solid #2f3676';

	if (value >= valorMaximo) {
		value = valorMaximo;
	} else {
		value++;
	}
	document.querySelector('#stickerVariable').value = value;
});

//Resultado e validação de formulário
function resultado() {
	let valor = document.querySelector('#stickerVariable').value;
	let obs = document.querySelector('#observe').value;

	let chkReact = document.querySelector('#chkReact');
	let chkVue = document.querySelector('#chkVue');
	let chkAngular = document.querySelector('#chkAngular');

	let arr = [chkReact, chkVue, chkAngular];

	//checar checkboxes
	let marcados = arr.filter(function (item) {
		return item.checked === true;
	});
	let nomes = marcados.map(function (item) {
		return item.name;
	});
	//Validação do formulário
	if (marcados.length == 0 || valor == 0) {
		//se nenhum checkbox estiver marcado ou o valor desejado ser 0, retorna a mensagem abaixo:
		alert('Não vai pedir nada?');
	} else {
		//alerta explicando o que foi pedido;
		alert('Você pediu ' + valor + ' sticker(s) de ' + nomes.join('/ '));

		//caso tenha alguma observação, é mostrado também!
		if (obs === '') {} else {
			console.log('Com as seguintes observações: ' + obs);
			alert('Com as seguintes observações: ' + obs);
		}
		//Mensagem de sucesso, some após 4 segundos;
		document.querySelector("footer p").innerHTML = "Formulário enviado com sucesso!";
		setTimeout(function () {
			document.querySelector("footer p").innerHTML = "";
		}, 4000);
	}
}