$(document).ready(function(){

  setNum();

  $("#numero1").attr("disabled", true)
  $("#numero2").attr("disabled", true)

  function setNum(){
    var dataF = Math.random() * 12;
    var numF = $("#numero1").val(parseInt(dataF));

    var dataS = Math.random() * 12;
    var numS = $("#numero2").val(parseInt(dataS));
  }
});

$("#calcular").click(function(){
  var result = $("#numero1").val() * $("#numero2").val();
  var resultClient = $("#campo").val();

  if("#campo" != null){
    if(result == resultClient){
      alert("Acertou Mizerav");
      setNum();
    } else {
      alert("Errou Mizerav");
      setNum();
    }
  } else {
    alert("Campo Vazio");
  }
});
