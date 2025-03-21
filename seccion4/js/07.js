const numeros = [5, 12, 8, 130, 44, 2, 60]

const numerosMultiplicados = numeros.map(numero => numero * 2);
console.log("Números multiplicados por 2:", numerosMultiplicados);

const numerosMayoresADiez = numeros.filter(numero => numero > 10);
console.log("Números mayores a 10:", numerosMayoresADiez);

const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma de todos los números:", sumaTotal);