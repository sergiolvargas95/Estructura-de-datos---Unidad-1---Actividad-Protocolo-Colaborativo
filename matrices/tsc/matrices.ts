function main(): void {

    // Declare array
    const numbers: number[][] = [];
    for (let i = 0; i < 3; i++) {
        numbers.push([0, 0, 0]);
    }


    initializeMatrix(numbers);
    printMatrix(numbers);
    traverseByColumns(numbers);
    sumElements(numbers);
    swapFirstAndLastRow(numbers);
    printMatrix(numbers);
}

// 1. Inicializar matriz con valores del 1 al 9
function initializeMatrix(numbers: number[][]): void {
    let value = 1;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            numbers[i][j] = value++;
        }
    }
}

// 2. Imprimir matriz en forma de tabla
function printMatrix(numbers: number[][]): void {
    console.log("=========== MATRIZ ===========");

    for (let i = 0; i < numbers.length; i++) {
        let row = "";
        for (let j = 0; j < numbers[i].length; j++) {
            row += numbers[i][j].toString().padStart(4, " ");
        }
        console.log(row);
    }
}

// 3. Recorrer matriz por columnas
function traverseByColumns(numbers: number[][]): void {
    console.log("=========== RECORRER POR COLUMNAS ===========");

    for (let j = 0; j < numbers[0].length; j++) {
        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i][j]);
        }
    }
}

// 4. Sumar todos los elementos
function sumElements(numbers: number[][]): void {
    let suma = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            suma += numbers[i][j];
        }
    }

    console.log("=========== SUMA DE ELEMENTOS ===========");
    console.log("La suma total es:", suma);
}

// 5. Intercambiar primera fila con la última
function swapFirstAndLastRow(numbers: number[][]): void {

    const lastRow = numbers.length - 1;

    for (let j = 0; j < numbers[0].length; j++) {
        const temp = numbers[0][j];
        numbers[0][j] = numbers[lastRow][j];
        numbers[lastRow][j] = temp;
    }

    console.log("=========== FILAS INTERCAMBIADAS ===========");
}

main();
