"use strict";

// Referência pra criar esse botão http://jsfiddle.net/linhadecomando/otp2owv7/
var fundoInp = document.querySelector('#numStick');

function add(valorMaximo) {
	var value = parseInt(document.querySelector('#numStick').value);
	value = isNaN(value) ? 0 : value;

	if (value >= valorMaximo) {
		value = valorMaximo;
	} else {
		value++;
		fundoInp.style.backgroundColor = '#dde3e9';
		fundoInp.style.border = '1px solid #2f3676';
	}

	document.querySelector('#numStick').value = value;
}

function sub(valorMinimo) {
	var value = parseInt(document.querySelector('#numStick').value, 0);
	value = isNaN(value) ? 0 : value;

	if (value <= valorMinimo) {
		value = valorMinimo;
		fundoInp.style.backgroundColor = '#F59393';
		fundoInp.style.border = '1px solid red';
	} else {
		value--;
	}

	document.querySelector('#numStick').value = value;
}

function resultado() {
	var valor = document.querySelector('#numStick').value;
	var obs = document.querySelector('#observe').value;
	var chkReact = document.querySelector('#chkReact');
	var chkVue = document.querySelector('#chkVue');
	var chkAngular = document.querySelector('#chkAngular');
	var arr = [chkReact, chkVue, chkAngular];
	var marcados = arr.filter(function (item) {
		return item.checked === true;
	});
	var nomes = marcados.map(function (item) {
		return item.name;
	});
	console.log('Você pediu ' + valor + ' sticker(s) de ' + nomes);
	console.log('Com as seguintes observações: ' + obs);
	alert('Você pediu ' + valor + ' sticker(s) de ' + nomes.join('/ '));
	alert('Com as seguintes observações: ' + obs);
}