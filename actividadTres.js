//Escribir una función que reciba un array y una función callback. La función debe aplicar el callback a cada elemento del array y retornar el nuevo array.

function restarUno(array, callback){
    return array.map(callback);
}

const resultado = restarUno([1, 2, 3, 4], x => x - 1);

console.log(resultado)