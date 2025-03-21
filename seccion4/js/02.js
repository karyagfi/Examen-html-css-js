function evaluarNumero(numero) {
  if (numero > 0) {
    return 'El número es positivo';
  } else if (numero < 0) {
    return 'El número es negativo';
  } else {  
    return 'El número es 0';
  }
}

console.log(evaluarNumero(5));
console.log(evaluarNumero(-5));
console.log(evaluarNumero(0));