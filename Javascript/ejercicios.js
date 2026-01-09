//Ejercicio 1
let number1 = Number(prompt("Ingrese primer numero: "));
let number2 = Number(prompt("Ingrese segundo numero: "));
let operacion = Number(prompt("Escoja operacion 1-Suma, 2-Resta, 3-Division, 4-multiplicacion: "));

switch (operacion) {
    case 1:
        console.log("Su suma es: " + (number1 + number2));
        break;
    case 2:
        console.log("Su resta es: " + (number1 - number2));
        break;
    case 3:
       if (number2 === 0) {
                console.log("Error: No se puede dividir por cero.");
            } else {
                console.log("Su division es: " + (number1 / number2));
            }
            break;
    case 4:
        console.log("Su multiplicaion es: " + (number1 * number2));
        break;
    default:
        console.log('No valido');
}

//Ejercicio 2
let numero = Number(prompt("Ingrese numero: "));

if (numero % 2 === 0 ){
    console.log('Es par');
}else{
    console.log('Es impar');
}

//Ejercicio 3
let numeroMes = Number(prompt("Ingrese numero del 1 al 12: "));

switch (numeroMes){
    case 1:
        console.log("Enero");
    break;
    case 2:
        console.log("Febrero");
    break;
    case 3:
         console.log("Marzo");
    break;
    case 4:
        console.log("Abril");
    break;
    case 5:
        console.log("Mayo");
    break;
    case 6:
        console.log("Junio");
    break;
    case 7:
        console.log("Julio");
    break;
    case 8:
        console.log("Agosto");
    break;
    case 9:
        console.log("Septiembre");
    break;
    case 10:
        console.log("Octubre");
    break;
    case 11:
         console.log("Noviembre");
    break;
    case 12:
        console.log("Diciembre");
    break;
    default:
      console.log('Numero no valido')
}