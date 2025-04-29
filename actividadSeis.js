const productos = [
    { nombre: "Notebook", precio: 1200},
    { nombre: "Mouse", precio: 20},
    { nombre: "Teclado", precio: 50},
    { nombre: "Monitor", precio: 300},
    { nombre: "Auriculares", precio: 80},
];
  
//1
const productosCaros = productos.filter(producto => producto.precio > 100);
console.log(productosCaros);

//2
const productosFormateados = productos.map(producto => `${producto.nombre}: $${producto.precio}`);
console.log(productosFormateados);

//3
const total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(`Total: $${total}`);

//4
const productosMenosCien = productos
  .filter(producto => producto.precio < 100)
  .map(producto => producto.nombre.toLowerCase());

console.log(productosMenosCien);