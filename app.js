const calculadora = require("./calculadora");

const process = require("process");
const { clear } = require("console");
let resultado;
const  operacion = process.argv[2];
const  numeroA = +process.argv[3];
const  numeroB = +process.argv[4];

if(operacion === "sumar"){
    resultado = calculadora.sumar(numeroA,numeroB)
}
else if(operacion === "restar"){
    resultado = calculadora.restar(numeroA,numeroB)
}
else if(operacion === "dividir"){
    resultado = calculadora.dividir(numeroA,numeroB);               
}
else if(operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA,numeroB)
}
else{
   resultado = "A'-a'-a': proba de vuelta."
} 

console.log("La respuesta es " + resultado + ". Gracias por calcular con nosotros.")