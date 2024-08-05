//*User profile  (Perfil del usuario)
///////////////////////////////////////////
//Solicita nombre de usuario
let Nombre = prompt ("Ingresa nombre de usuario");

//solicitar la edad 
let Edad = prompt("Ingresa tu edad");
//solicitar lista de peliculas favoritas

let Peliculas = prompt("Ingresa tu lista de peliculas favoritas separadas por comas");

//Almacenar informacion 
let usuario = { 
    nombre:nombre,
    edad: edad,
    peliculas : peliculas.split(","),
};

//Lo que se mostrara en la consola
console.log("Nombre de usuario:${usuario.nombre}");
console.log(Edad: "${usuario.edad}");
console.log("Peliculas favoritas:");
usuario.Peliculas.forEach((pelicula) => {
    console.log("La pelicula ${pelicula.trim()} es una de mis favoritas.");
});

//*Highest number   (Número más alto)
//////////////////////////////////////////
//Pedir 10 numeros al ususario 
let numeros =[1,5,6,4,20,45,42,63,75]
for (let i =0; i < numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }
}
console.log("El numero mayor es :" $ {mayor});

//*Alarm           (Alarma)
/////////////////////////////////////////
let sugundos = parseInt (prompt("Ingresa la cantidad de segundos hasta que se ejecute la alarma"));

let texto = prompt("Ingresa el texto para mostrar cuanod se ejecute la alarma");

console.log("Hora de ${texto}en ${segundos} segundos");
setTimeout (() => {
    console.log ("¡${texto}!");
},segundos * 1000); 

//*Palindrome    (Palíndromo)
////////////////////////////////////////
let palabra = prompt("Ingrsa una palabra o frase");
palabra = palabra.replace(/[^\w\s]|_/g,"").replace(/\s+/g,"").toLowerCase();

if(palabra === palabra.split("").reverse().join("")){
    console.log("La palabra o frase es un polindromo");
} else {
    console.log("La palabra o frase No es un polindromo");
}

//*Factorial     (Factorial)
///////////////////////////////////////
let n =parseInt(prompt("Ingresa un numero entero(1 <= n)"));

function Factorial(n){
    if (n === 1 ){
        return 1;
    }else {
        return n*Factorial(n-1);
    }
}
let resultado = factorial(n);
console.log ("la factorial de ${n} es ${resultado}");

//*Flat array    (Matriz plana)
//////////////////////////////////////
let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function aplanarMatriz (matriz) {
    let resultado = [];
    for (let elemento){
        if (Array.isArray(elemento)){
            resultado = resultado.concat(apalnarMatriz(elemento));
        } else {
            resultado.push(elemento);
        }
    }
    return resultado;
}
let matrizAplanada = aplanarMatriz(multiDimension);
console.log(matrizAplanada);



