/*
Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.
Luego crea una function map() que tome dos entradas o parámetros:
un array de como valores números. 
una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada.
*/


function gastoConIva(nro) {
    return nro + nro * 0.21;
}

console.log("El gasto con Iva es de: $" + gastoConIva(100));

function map(array, miFuncion) {
    let arrayModificado = array.map(miFuncion);
    return arrayModificado;
}

let array = [6, 10, 2, 4];
let arrayNuevo = (map(array, gastoConIva));
console.log(arrayNuevo);
