function valida(){
	var numero1 = document.getElementById("numero1").innerHTML;
	var numero2 = document.getElementById("numero2").innerHTML;
	var campo = document.getElementById("campo").value;
	var score = parseInt(document.getElementById('score').innerHTML);

	if(numero1 * numero2 == campo){
		score = score + 1;
		document.getElementById('score').innerHTML = score;
		document.getElementById('tiro').play();
	}
	else{
		score = score - 1;
		document.getElementById('score').innerHTML = score;
		document.getElementById('bomba').play();
	}
	
	limpar();
}

function limpar(){
	document.getElementById('campo').value = "";
	var rand = Math.floor(Math.random() * 15);
	var rand2 = Math.floor(Math.random() * 15);
	document.getElementById("numero1").innerHTML = rand;
	document.getElementById("numero2").innerHTML = rand2;
}