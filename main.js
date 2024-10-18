
let a = 7;
let b = 5;
let c;
let suma = (x, y)=>{
    return x+y;
}
c=suma(a,b);
console.log("La suma de a y b es: "+c);
c=2;
if(a > b && a>c){
    console.log("El mayor de los 3 numeros es: "+a)
}else if (b>a && b>c){
    console.log("El mayor de los 3 numeros es: "+b)

}else if (c>a && c>b){
    console.log("El mayor de los 3 numeros es: "+c)

}

// let nombre = prompt("Por favor, ingresa tu nombre:");
// console.log("Hola, " + nombre + "!");

// let numero = prompt("Ingrese un numero para saber si es par o impar:")
// console.log("El número " + numero + " es " + (numero % 2 === 0 ? "par" : "impar") );

let i = 10;
while(i>0){
    console.log(i);
    i--;
}

// let y
// do{
//     y = prompt("Ingrese un numero mayor a 100:")
// }while(y <= 100);
// console.log(y);

function esPar(z) {
    return z % 2 === 0;
  }
console.log("El numero 4 es par: "+esPar(4));
console.log("El numero 7 es par: "+esPar(7)); 
console.log("El numero 0 es par: "+esPar(0));

function convertirCelsiusAFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }
  console.log("0ºC son equivalentes a "+convertirCelsiusAFahrenheit(0)+"ºF");

let persona = {
    nombre:'Matias',
    edad:21,
    ciudad:'Mendoza',
    cambiarCiudad: function(c1){
        this.ciudad = c1;
    }
}
console.log(persona);
persona.cambiarCiudad('Buenos Aires');
console.log(persona);

let libro = {
    titulo:'Libro1',
    autor:'Matias Telo',
    anio:2024,
    esAntiguo: function() {
        const añoActual = new Date().getFullYear();
        if (añoActual - this.año > 10) {
          console.log(`El libro '${this.titulo}' es antiguo.`);
        } else {
          console.log(`El libro '${this.titulo}' es reciente.`);
        }
      }
}
libro.esAntiguo();

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array multiplicado:", numerosMultiplicados);

let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) { 
    pares.push(i);    
  }
  if (pares.length === 10) { 
    break;
  }
}
console.log(pares);

let boton = document.getElementById("colorButton");

function cambiarColor() {
    
    let parrafos = document.getElementsByTagName("p");

    for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue";
    }
}
boton.addEventListener("click", cambiarColor);

const boton2 = document.getElementById("miBoton");
const campoTexto = document.getElementById("campoTexto");

function mostrarAlerta() {
    const valorIngresado = campoTexto.value; 
    alert("Valor ingresado: " + valorIngresado); 
}
boton2.addEventListener("click", mostrarAlerta);

const lista = document.getElementById("miLista");
const elementos = lista.getElementsByTagName("li");
function mostrarTexto(event) {
    console.log(event.target.textContent);
}
for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("click", mostrarTexto);
}

const campoTexto1 = document.getElementById("miCampoTexto");
const deshabilitarBtn = document.getElementById("deshabilitarBtn");
const habilitarBtn = document.getElementById("habilitarBtn");

deshabilitarBtn.addEventListener("click", function() {
  campoTexto1.disabled = true; 
  deshabilitarBtn.disabled = true; 
  habilitarBtn.disabled = false; 
});

habilitarBtn.addEventListener("click", function() {
  campoTexto1.disabled = false; 
  habilitarBtn.disabled = true; 
  deshabilitarBtn.disabled = false; 
  campoTexto1.focus(); 
});

document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const emailDisplay = document.getElementById('emailDisplay');

    function displayEmail(email) {
        emailDisplay.innerHTML = `
            <p>Correo Electrónico: ${email}</p>
            <button id="deleteEmailButton">Eliminar</button>
        `;
        document.getElementById('deleteEmailButton').addEventListener('click', () => {
            localStorage.removeItem('email');
            emailDisplay.innerHTML = '';
        });
    }

    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
        displayEmail(savedEmail);
    }

    emailForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        localStorage.setItem('email', email);
        displayEmail(email);
        emailInput.value = '';
    });
});