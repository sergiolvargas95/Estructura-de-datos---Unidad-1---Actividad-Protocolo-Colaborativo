function main() {
    var numbers = Array.from({ length: 3 }, function () { return Array(3).fill(0); });
    initializeMatrix(numbers);
    printMatrix(numbers);
    traverseByColumns(numbers);
    sumElements(numbers);
    swapFirstAndLastRow(numbers);
    printMatrix(numbers);
}
// 1. Inicializar matriz con valores del 1 al 9
function initializeMatrix(numbers) {
    var value = 1;
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers[i].length; j++) {
            numbers[i][j] = value++;
        }
    }
}
// 2. Imprimir matriz en forma de tabla
function printMatrix(numbers) {
    console.log("=========== MATRIZ ===========");
    for (var i = 0; i < numbers.length; i++) {
        var row = "";
        for (var j = 0; j < numbers[i].length; j++) {
            row += numbers[i][j].toString().padStart(4, " ");
        }
        console.log(row);
    }
}
// 3. Recorrer matriz por columnas
function traverseByColumns(numbers) {
    console.log("=========== RECORRER POR COLUMNAS ===========");
    for (var j = 0; j < numbers[0].length; j++) {
        for (var i = 0; i < numbers.length; i++) {
            console.log(numbers[i][j]);
        }
    }
}
// 4. Sumar todos los elementos
function sumElements(numbers) {
    var suma = 0;
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers[i].length; j++) {
            suma += numbers[i][j];
        }
    }
    console.log("=========== SUMA DE ELEMENTOS ===========");
    console.log("La suma total es:", suma);
}
// 5. Intercambiar primera fila con la última
function swapFirstAndLastRow(numbers) {
    var lastRow = numbers.length - 1;
    for (var j = 0; j < numbers[0].length; j++) {
        var temp = numbers[0][j];
        numbers[0][j] = numbers[lastRow][j];
        numbers[lastRow][j] = temp;
    }
    console.log("=========== FILAS INTERCAMBIADAS ===========");
}
main();
