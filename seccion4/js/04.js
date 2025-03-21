function getRandom() {
  return Math.floor(Math.random() * 10) + 1
}

while (true) {
  let number = getRandom()
  console.log(number)

  if (number >= 8) {
    console.log("Se generó un número alto, fin del programa")
    break
  } 
}