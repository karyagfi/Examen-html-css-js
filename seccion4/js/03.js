const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log("Suma de todos los números:", suma)

let numeroMayor = numeros[0];
let numeroMenor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
  }
  if (numeros[i] < numeroMenor) {
    numeroMenor = numeros[i];
  }
}

console.log("Número mayor:", numeroMayor);
console.log("Número menor:", numeroMenor);

// let i = 0;: Inicializamos una variable i con el valor 0. Esta variable será nuestro contador y representará la posición actual en el arreglo.

// i < numeros.length;: Es la condición que determina cuánto durará el ciclo. numeros.length nos dice cuántos elementos hay en el arreglo. En este caso, hay 10, así que el ciclo continuará mientras i sea menor que 10.

// i++: Esto incrementa el valor de i en 1 después de cada iteración del ciclo. Es decir, después de que se ejecuten todas las instrucciones dentro del ciclo, i se incrementará en 1.