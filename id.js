
//generar una camtidad x de numeros aleatorio
function getRandomNumbers() {
  return Math.random() * 100000000;
}

//quitar el punto para que devuelve una camtidad completa de numeros
function removePointInNumbers() {
  let numId = getRandomNumbers().toString().split('.').join('');
  return parseInt(numId);
}

//convertir esos numeros en un array de numeros
function createArrayNumbers(num) {
  let time = new Date().getTime();
  return [...`${num}${time}`];
}

//generar la longitud que deceo para id
function getLengthIds(n) {
  let arrayNunbers = createArrayNumbers(removePointInNumbers());
  arrayNunbers.length = n;
  return arrayNunbers.join('');
}

export default getLengthIds
