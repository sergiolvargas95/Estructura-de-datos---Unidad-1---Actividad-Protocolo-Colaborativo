def main():
    numbers = []

    # declare array
    for _ in range(3):
        numbers.append([0, 0, 0])

    initialize_matrix(numbers)
    print_matrix(numbers)
    traverse_by_columns(numbers)
    sum_elements(numbers)
    swap_first_and_last_row(numbers)
    print_matrix(numbers)


# 1. Inicializar matriz con valores del 1 al 9
def initialize_matrix(numbers):
    value = 1

    for i in range(len(numbers)):
        for j in range(len(numbers[i])):
            numbers[i][j] = value
            value += 1


# 2. Imprimir matriz en forma de tabla
def print_matrix(numbers):
    print("=========== MATRIZ ===========")

    for i in range(len(numbers)):
        for j in range(len(numbers[i])):
            print(f"{numbers[i][j]:4}", end="")
        print()


# 3. Recorrer matriz por columnas
def traverse_by_columns(numbers):
    print("=========== RECORRER POR COLUMNAS ===========")

    for j in range(len(numbers[0])):
        for i in range(len(numbers)):
            print(numbers[i][j])


# 4. Sumar todos los elementos
def sum_elements(numbers):
    suma = 0

    for i in range(len(numbers)):
        for j in range(len(numbers[i])):
            suma += numbers[i][j]

    print("=========== SUMA DE ELEMENTOS ===========")
    print("La suma total es:", suma)


# 5. Intercambiar primera fila con la última
def swap_first_and_last_row(numbers):
    last_row = len(numbers) - 1

    for j in range(len(numbers[0])):
        temp = numbers[0][j]
        numbers[0][j] = numbers[last_row][j]
        numbers[last_row][j] = temp

    print("=========== FILAS INTERCAMBIADAS ===========")


if __name__ == "__main__":
    main()
