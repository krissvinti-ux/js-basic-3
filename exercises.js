//1. Escribe una función que tome dos números como argumentos y devuelva su suma.
let x = 3;
let y = 5;
let respuesta;

function suma(a, b) {
  let adicion = a + b;
  return adicion;
}
console.log(suma(x, y));

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function resta(a, b) {
  let sustraccion = a - b;
  return sustraccion;
}
console.log(resta(10, 4));

//3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function multiplicar(a, b) {
  let multiply = a * b;
  return multiply;
}
console.log(multiplicar(2, 9));

//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function exponente(a, b) {
  let exponentes = a ** b;
  return exponentes;
}
console.log(exponente(2, 5));

//6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function resto(a, b) {
  let modulo = a % b;
  return modulo;
}
console.log(resto(10, 3));

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function raizcuadrada(a) {
  let raiz = Math.sqrt(a);
  return raiz;
}
console.log(raizcuadrada(81));


//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function valor(a) {
  let valorabsoluto = Math.abs(a);
  return valorabsoluto;
}
console.log(valor(-25));

//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function redondeado(a) {
  let vredondo = Math.round(a);
  return vredondo;
}
console.log(redondeado(4.6));

//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function generar() {
  let aleatorio = Math.random();
  return aleatorio;
}
console.log(generar());

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

let texto1 = "Cristina";
let texto2 = "Viejó";

function concatenacion(a, b) {
  let juntar = a + b;
  return juntar;
}
console.log(concatenacion(texto1, texto2));

//2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function longitud(a) {
  let lgitud = a.length;
  return lgitud;
}
console.log(longitud("Hola mundo"));

//3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function mayuscula(a) {
  let uppercase = a.toUpperCase();
  return uppercase;
}
console.log(mayuscula("hola"));

//4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function minuscula(a) {
  let lowercase = a.toLowerCase();
  return lowercase;
}
console.log(minuscula("HOLA"));

//5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function caracter(texto, index) {
  let resultado = texto[index];
  return resultado;
}
console.log(caracter("Cristina", 2));

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function invertida(texto) {
  let invierto = texto.split("").reverse().join("");
  return invierto;
}
console.log(invertida("Hola"));

// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function contarCaracter(texto, caracter) {
  let guardardato = 0;
  for (let index = 0; index < texto.length; index++) {
    if (texto[index] === caracter) {
      guardardato++;
    }
  }
  return guardardato;
}
console.log(contarCaracter("banana", "a"));

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function quitarespacios(a) {
  let resultado = a.trim();
  return resultado;
}
console.log(quitarespacios("   Hola   "));

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function espalindromo(texto) {
  let limpio = texto.toLowerCase().replace(/\s+/g, "");
  let textoReverso = limpio.split("").reverse().join("");
  return textoReverso === limpio;
}
console.log(espalindromo("anita lava la tina"));
console.log(espalindromo("hola mundo"));

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
function capitalizarPalabras(texto) {
  let palabras = texto.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }
  return palabras.join(" ");
}
console.log(capitalizarPalabras("hola soy cristina"));


// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
console.log(sumarArray([1, 2, 3, 4]));

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
function sumaarray(numeros) {
  let suma = 0
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]
  }
  let division = suma / numeros.length
  return division
}
console.log(sumaarray([10, 20, 30]));

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function ordenar(numeros) {
  let orden = numeros.slice().sort((a, b) => a - b);
  return orden
}
console.log(ordenar([10, 2, 30, 4]));

// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
function nuevo(numeros, numero) {
  let mayores = []
  for (let i = 0; i < numeros.length; i++) {
    if (numero < numeros[i]) {
      mayores.push(numeros[i])
    }
  }
  return mayores
}
console.log(nuevo([1, 5, 10, 20], 9));

// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
function unirArrays(arr1, arr2) {
  let nuevoArray = arr1.concat(arr2);
  return nuevoArray;
}
console.log(unirArrays([1, 2], [3, 4]));

// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
function maximo(numeros) {
  let max = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}
console.log(maximo([3, 9, 2, 15, 6]));

// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
function minimo(numeros) {
  let min = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < min) {
      min = numeros[i];
    }
  }
  return min;
}
console.log(minimo([3, 9, 2, 15, 6]));

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
function contarElemento(arr, elemento) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      contador++;
    }
  }
  return contador;
}
console.log(contarElemento([1, 2, 2, 3, 2], 2));

// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
function sinDuplicados(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultado.includes(arr[i])) {
      resultado.push(arr[i]);
    }
  }
  return resultado;
}
console.log(sinDuplicados([1, 2, 2, 3, 3, 4]));

// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
function invertirArray(arr) {
  let invertido = arr.slice().reverse();
  return invertido;
}
console.log(invertirArray([1, 2, 3, 4]));
