// JavaScript source code
// cree una funcion de escribir para que cada vez que se pulse una tecla, esta se escriba
function escribir(valor) {
    num1.value = num1.value + valor;
}
// cree una funcion de operacion para que cada vez que se pulse una tecla de funcion +-*/ se realicen las operaciones dentro de la caja de texto
function operacion(signo) {
    let cadena = new String(num1.value)
    num1.value = eval(cadena.valueOf())
} 
// cree una funcion de borrar, para que cada vez que se pulse una tecla C, se borre todo lo que contiene la caja de texto. 
function borrar() {
    num1.value = ''
}