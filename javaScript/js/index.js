var table = document.getElementsByTagName("table")[0];
var buttonAdd = document.getElementById('singlebutton');
var inputName = document.getElementById('nome');

buttonAdd.onclick = function () {
	if (check()) {
		var body = table.tBodies[0];
		var tr = body.insertRow();
		var firstTd = tr.insertCell();
		var texto = document.createTextNode(inputName.value);
		firstTd.appendChild(texto);
		clearAll();
	}
}

function clearAll() {
	inputName.value = '';
}

function check() {
	if (inputName.value == '') {
		inputName.focus();
		alert('O nome é obrigatório');
		return false;
	} else {
		return true;
	}
}