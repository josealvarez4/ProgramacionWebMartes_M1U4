var distancia;
var transporte;

while (distancia == null || /\D/.test(distancia) || distancia == ""){
    distancia=prompt('Ingrese una distancia en metros:');
}

if (distancia<1001){
    transporte='a Pie.';
    }else if (distancia<10001){
        transporte='Bicicleta.';
        }else if (distancia<30001){
            transporte='Colectivo.';
            }else if (distancia<100001){
                transporte='Auto.';
                }else{
                    transporte='Avión';
                }

console.log (distancia + ' ' + transporte)

document.write ('El medio de transporte para recorrer ' + distancia + ' metros es: ' + transporte)