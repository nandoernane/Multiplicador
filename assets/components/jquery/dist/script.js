$(document).ready(function(){

  setNum();

  $("#numero1").attr("disabled", true)
  $("#numero2").attr("disabled", true)

      function setNum(){   

        var vlB = $("#vlB").val();
        var vlA = $("#vlA").val(); 
        var dataF;
        var numF;
        var dataS;
        var numS;

        if((vlA == 0) && (vlB == 0)){

             $("#iniciar").click(function(){        

              vlB = $("#vlB").val();
              vlA = $("#vlA").val(); 

              dataF = Math.random() * parseInt(vlA);
              numF = $("#numero1").val(parseInt(dataF));

              dataS = Math.random() * parseInt(vlB);
              numS = $("#numero2").val(parseInt(dataS));

              $("#campo").val("");
           });   
       
        }else{

            dataF = Math.random() * parseInt(vlA);
            numF = $("#numero1").val(parseInt(dataF));

            dataS = Math.random() * parseInt(vlB);
            numS = $("#numero2").val(parseInt(dataS));

            $("#campo").val("");
        }   
    }

  $("#calcular").click(function(){

    var result = $("#numero1").val() * $("#numero2").val();
    var resultClient = $("#campo").val();
    var audioElement = document.createElement('audio');
         

    var numA = $('#scoreA').val();
    var numE = $('#scoreE').val();

    if("#campo" != ""){
      if(result == resultClient){
        //alert("Resposta correta!");
        $("#resultado").val(result);        
        $('#scoreA').val(parseInt(numA) + 1);
        audioElement.setAttribute('src','assets/audio/risada.mp3');             
        audioElement.play();        
        setNum();
      } else {
        //alert("Resposta Errada!");
        $("#resultado").val(result);   
        $("#scoreE").val(parseInt(numE) + 1);
        audioElement.setAttribute('src','assets/audio/morreu.mp3');             
        audioElement.play();
        setNum();
      }
      var total = $("#scoreA").val() - $("#scoreE").val();
      $('#scoreT').val(total);
    } else {
      alert("Campo Vazio");
    }
  });
});
