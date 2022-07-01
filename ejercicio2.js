var arreglo=new Array();
var mayor=0;
var numero;

for (var i=0;i<10;i++){
    while (numero == null || /\D/.test(numero) || numero == ""){
        numero=prompt('Ingrese un numero:');
    }; 
    arreglo[i]=numero;
    if (parseInt(arreglo[i])>parseInt(mayor)){
        mayor=arreglo[i];
    };
    console.log(mayor);   
    numero=null;
    document.write ((i+1) + ': ' + arreglo[i] + '<br>')
};

console.log(arreglo);

document.write ('<br> Mayor: ' + mayor);