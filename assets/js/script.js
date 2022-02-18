console.log();

document.write();

alert("mensaje informativo");
prompt("mensaje emergente para solicitar datos");
confirm("mensaje emergente par soliciar confirmacion");

//Espacio en memoria Ram para almacenar datos
//es una caja que me permite duardar un unico dato

//declarar variable: reservar espacio para guardar datos
//se declaran con el var (hasta el momento)
//estandar lowerCamelCase
var cadenaDeTexto = 'hola Mundo';
console.log(cadenaDeTexto)
//tipos de datos: strng, number, null, boolean, undefined

var dato; 
console.log('tipo de dato de la variable "dato": ' + typeof dato);
dato = "ahora es una cadena";
console.log('tipo de dato de la variable "dato": ' + typeof dato)
dato = 10;
console.log('tipo de dato de la variable "dato": ' + typeof dato);
dato = true;
console.log('tipo de dato de la variable "dato": ' + typeof dato);
dato = null
console.log('tipo de dato de la variable "dato": ' + typeof dato);

//trato de datos según su tipo
console.log(10+10) //number
console.log('10'+'10') //cadena de datos

//precauciones que debo tener con el bajo tipado
var numeroUnoString = prompt('ingresa primer número')
var numeroDosString = prompt('ingresa segundo número')
var numeroUno = parseInt(numeroUnoString)
var numeroDos = parseInt(numeroDosString) 

console.log('la suma de los numeros es: ' + (numeroUno + numeroDos))

//operadores 
//Aritmeticos: + - / * %
//Comparacion: < > <= >= != == === !==
//Caracteres: +

//Template string interpolacion placeholder

var nombre = prompt('ingresa tu nombre')
console.log('bienvenido ' + nombre);
console.log(`bienvenido ${nombre}, que bueno que estas aca`); 