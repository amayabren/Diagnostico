// 1
let nombre = "Ana";
let edad = 22;

console.log("Hola, me llamo ", nombre, " y tengo ", edad)

// 2
//2.1
const numeros = [3, 7, 12, 5, 2];

const cuadrados = numeros.map(num => num * num);
console.log("Cuadrados:", cuadrados); 

//2.2
const mayores5 = numeros.filter(num => num > 5);
console.log("Mayores a 5:", mayores5); 

//2.3
const parImpar = num => (num % 2 === 0 ? "Es par" : "Es impar");

console.log(parImpar(7)); 
console.log(parImpar(12));