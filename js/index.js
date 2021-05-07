function inserir(numero){
    var num =  document.getElementById('resul').value;
    document.getElementById('resul').value =  num + numero;

}
function cal (){

    var resultado = document.getElementById('resul').value;
    if(resultado)
    {
       document.getElementById('resul2').value = eval (resultado);
    }
    else
    {
       document.getElementById('resul2').value = "Nada a calcular"
    }
}
function acres (){
      
    var resultado = document.getElementById('resul').value;
    
    if (resultado<0){

    document.getElementById('resul').value = resultado * -1;
                }
     else{
      document.getElementById('resul').value= resultado * -1;
     }
}
function Limpa (){

   resul.value=' ';
   resul2.value=' ';     

}
 //  function porcento(){

  // var num = document.getElementById('resul').value;
  // document.getElementById("resul").value = (num/100);
//}



function porcento() {
	var num = document.getElementById('resul').value;
	console.log(num);
	var resultado = eval(num) / 100;
	document.getElementById('resul').value = resultado;
}