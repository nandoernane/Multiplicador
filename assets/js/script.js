$(document).ready(function(){

  setNum();

  $("#numero1").attr("disabled", true)
  $("#numero2").attr("disabled", true)

  function setNum(){
    var dataF = Math.random() * 12;
    var numF = $("#numero1").val(parseInt(dataF));

    var dataS = Math.random() * 12;
    var numS = $("#numero2").val(parseInt(dataS));

    $("#campo").val("");
  }

  $("#calcular").click(function(){
    var result = $("#numero1").val() * $("#numero2").val();
    var resultClient = $("#campo").val();

    var numA = $("#scoreA").val();
    var numE = $("#scoreE").val();

    if("#campo" != ""){
      if(result == resultClient){
        alert("Resposta correta!");
        $("#scoreA").val(numA + 1);
        setNum();
      } else {
        alert("Resposta Errada!");
        $("#scoreE").val(numE + 1);
        setNum();
      }
    } else {
      alert("Campo Vazio");
    }
  });

});
