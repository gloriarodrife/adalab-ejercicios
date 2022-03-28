function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getRandomOption() {
  const randomNumber = getRandomNumber(3);
  if (randomNumber === 1) {
    return 'papel';
  }
  if (randomNumber === 2) {
    return 'tijeras';
  }
  if (randomNumber === 3) {
    return 'piedra';
  }
}
const machineOption = getRandomOption();
console.log(`Máquina: ${machineOption}`);

const userOption = 'papel';
console.log(`Usuario: ${userOption}`);

function competition() {
  if (machineOption === userOption) {
    return 'empate';
  }

  if (
    (machineOption === 'piedra' && userOption === 'tijeras') ||
    (machineOption === 'tijeras' && userOption === 'papel') ||
    (machineOption === 'papel' && userOption === 'piedra')
  ) {
    return 'has perdido';
  }

  if (
    (machineOption === 'piedra' && userOption === 'papel') ||
    (machineOption === 'tijeras' && userOption === 'piedra') ||
    (machineOption === 'papel' && userOption === 'tijera')
  ) {
    return 'has ganado';
  }

  // if (machine === 'piedra' && user === 'papel') {
  //   return 'has ganado';
  // }
  // if (machine === 'tijeras' && user === 'piedra') {
  //   return 'has ganado';
  // }
  // if (machine === 'papel' && user === 'tijera') {
  //   return 'has ganado';
  // }
}

const result = competition();
console.log(`El resultado es... ${result}!`);
