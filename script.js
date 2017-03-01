$('#numero1').append(Math.floor(Math.random() * 15));
$('#numero2').append(Math.floor(Math.random() * 15));
$('#campo').value = "";

function valida(){
	var numero1 = $("#numero1").value;
	var numero2 = $("#numero2").value;
	var campo = $("campo").value;
	// var score = parseInt(document.getElementById('score').innerHTML);

	if(numero1 * numero2 == campo){
		score = score + 1;
		document.getElementById('score').innerHTML = score;
		$('#tiro').play();
	}
	else{
		score = score - 1;
		alert("você errou!");
		document.getElementById('score').innerHTML = score;
		$.('#bomba').play();
	}

	// limpar();
}

function limpar(){
	// document.getElementById('campo').value = "";
	// var rand = Math.floor(Math.random() * 15);
	// var rand2 = Math.floor(Math.random() * 15);
	// $("numero1").append(rand);
	// $("numero2").append(rand2);
}
