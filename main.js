const cuadro = document.getElementById('cuadro');
const botones = document.querySelectorAll('button');
let operador = '';
let primero = 0;
let segundo = 0;


botones.forEach((boton) => {
    boton.addEventListener('click', function() {
        let valor = boton.textContent;
        if(!isNaN(valor)|| valor=='.'){
            if(operador){
                segundo+=valor;
                cuadro.textContent=segundo
            }else{
                primero+=valor;
                cuadro.textContent=primero;
            }
            
        }else if(valor==='+'||valor==='-' ||valor==='/' ||valor==='X'){
            if(primero&&segundo){
                primero = calcular(primero,segundo,operador);
                segundo='';
            }
            operador=valor;
            cuadro.textContent=operador;
        }else if(valor==='='){
            primero = calcular(primero,segundo,operador);
            cuadro.textContent=primero;
            segundo=''
            operador='';

        }else if(valor==='Limpiar'){
            primero = 0;
            segundo = 0;
            operador = '';
            cuadro.textContent=0;
        }
    
    });
});

function calcular(numero1, numero2, operador) {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "X":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Error"; 
        default:
            return 0;
    }
}
