// -------------------------------
// 1. Array declaration and creation
// -------------------------------
function create_array(): number[] {
    const array: number[] = [];

    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        array.push(randomNumber);
    }
    
    console.log("Arreglo inicial:");
    console.log(array);
    
    return array;
}

// -------------------------------
// 2. Traversal and printing
// -------------------------------
function traverse_array(array: number[]): void {
    console.log("\nRecorrido con for clásico:");
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice ${i}: ${array[i]}`);
    }

    console.log("\nRecorrido con for-each:");
    for (const value of array) {
        console.log(value);
    }
}

// -------------------------------
// 3. Modification
// -------------------------------
function modify_array(array: number[]): void {
    let odd_numbers: number[] = [];
    let multiplied_array: number[] = [];

    for (let i = 0; i < array.length; i++) {
        odd_numbers[i] = array[i];

        if (array[i] % 2 !== 0) {
            odd_numbers[i] = 0;
        }
    }

    console.log("\nDespués de cambiar impares por 0:");
    console.log(odd_numbers);

    for (let i = 0; i < array.length; i++) {
        multiplied_array.push(array[i] * i);
    }

    console.log("\nDespués de multiplicar por su índice:");
    console.log(multiplied_array);
}

// -------------------------------
// 4. Linear search
// -------------------------------
async function linear_search(array: number[]): Promise<void> {
    const readline = await import("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (query: string) => new Promise<string>(resolve => rl.question(query, resolve));

    const input = await question("\nIngrese un valor a buscar: ");
    const target_value = parseInt(input);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target_value) {
            console.log(`Valor encontrado en el índice ${i}`);
            rl.close();
            return;
        }
    }

    console.log("Valor no encontrado");
    rl.close();
}

// -------------------------------
// Main function
// -------------------------------
async function main() {
    const array = create_array();
    traverse_array(array);
    await linear_search(array);
    modify_array(array);
}

main();