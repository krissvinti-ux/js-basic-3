//1. Escribe una función que tome dos números como argumentos y devuelva su suma.
let x=3;
let y=5;
let respuesta;

function suma(a, b){
    let adicion = a+b;
    return adicion;
}

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function resta (a,b){
let sustraccion= a-b;
return sustraccion;

}

//3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function multiplicar (a,b){
let multiply= a*b;
return multiply;

}

//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function exponente (a,b){
let exponentes= a**b;
return exponentes;
}

//6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function resto (a,b){
let modulo= a%b;
return modulo;
}

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
function raizcuadrada (a){
let raiz= Math.sqrt (a);
return raiz;
}


//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function valor (a){
let valorabsoluto= Math.abs (a);
return valorabsoluto;
}

//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function redondeado (a){
    let vredondo=Math.round(a);
    return vredondo;
    }
//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
function generar (){
    let aleatorio= Math.random();
return  aleatorio;
}

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

let texto1="Cristina";
let texto2="Viejó";

function concatenacion(a,b){
    let juntar= a+b;
    return juntar;
}
//2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function longitud (a){
    let lgitud= a.length;
    return lgitud;
    }
//3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function mayuscula (a){
    let uppercase= a.toUpperCase();
    return uppercase;
    }

//4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
function minuscula (a){
    let lowercase= a.toLowerCase();
    return lowercase;
    }

//5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function caracter (texto, index){
    let resultado= texto[index];
    return resultado;
    }

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function invertida (texto){
    let invierto= texto.reverse()
    return invierto;
    }
// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function invertida (texto, caracter){
    let guardardato =0;
    for(let index =0; index< texto.length; index++){
        if( texto [index]=== caracter){
guardardato++;
}
    }
return guardardato;    
    }
// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
