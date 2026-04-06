import random

# -------------------------------
# 1. Array declaration and creation
# -------------------------------
def create_array():
    array = [random.randint(1, 100) for _ in range(10)]
    print("Arreglo inicial:")
    print(array)
    return array

# -------------------------------
# 2. Traversal and printing
# -------------------------------
def traverse_array(array):
    print("\nRecorrido con for:")
    for i in range(len(array)):
        print(f"Índice {i}: {array[i]}")

    print("\nRecorrido con for-each:")
    for value in array:
        print(value)

# -------------------------------
# 3. Modification
# -------------------------------
def modify_array(array):
    odd_numbers = []
    multiplied_array = []

    for i in range(len(array)):
        odd_numbers.append(array[i])
        if array[i] % 2 != 0:
            odd_numbers[i] = 0

    print("\nDespués de cambiar impares por 0:")
    print(odd_numbers)

    for i in range(len(array)):
        multiplied_array.append(array[i] * i)

    print("\nDespués de multiplicar por su índice:")
    print(multiplied_array)

# -------------------------------
# 4. Linear search
# -------------------------------
def linear_search(array):
    target_value = int(input("\nIngrese un valor a buscar: "))
    
    for i in range(len(array)):
        if array[i] == target_value:
            print(f"Valor encontrado en el índice {i}")
            return
    
    print("Valor no encontrado")




def main():
    array = create_array()
    traverse_array(array)
    linear_search(array)   
    modify_array(array)

if __name__ == "__main__":
    main()