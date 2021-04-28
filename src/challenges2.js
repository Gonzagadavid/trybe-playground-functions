// Desafio 10
function techList (technologies, name) {
  if (technologies.length === 0) return 'Vazio!';
  const technologiesOrder = sort(technologies);
  const list = [];
  for (const index in technologiesOrder) {
    list.push(
      {
        tech: technologiesOrder[index],
        name: name
      }
    )
    ;
  }
  return list;
}

// Desafio 11
function generatePhoneNumber (array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (numberRepeat(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let prefix = '';
  let start = '';
  let end = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    const strNumber = array[i].toString();
    const position = i + 1;
    if (position < 3) {
      prefix += strNumber;
    } else if (position < 8) {
      start += strNumber;
    } else {
      end += strNumber;
    }
  }
  return `(${prefix}) ${start}-${end}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2]));
// Desafio 12
function triangleCheck () {
  // seu código aqui
}

// Desafio 13
function hydrate () {
  // seu código aqui
}

// funções auxiliares
function sort (array) {
  const arrayCopy = [...array];
  let memory = '';
  for (let j = 0; j < arrayCopy.length - 1; j++) {
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      if (arrayCopy[i].charCodeAt() > arrayCopy[i + 1].charCodeAt()) {
        memory = arrayCopy[i];
        arrayCopy[i] = arrayCopy[i + 1];
        arrayCopy[i + 1] = memory;
      } else if (arrayCopy[i].charCodeAt() === arrayCopy[i + 1].charCodeAt()) {
        if (arrayCopy[i].slice(1).charCodeAt() > arrayCopy[i + 1].slice(1).charCodeAt()) {
          memory = arrayCopy[i];
          arrayCopy[i] = arrayCopy[i + 1];
          arrayCopy[i + 1] = memory;
        }
      }
    }
  }

  return arrayCopy;
}

function numberRepeat (array) {
  const arrayInedito = [];

  for (let i = 0; i < array.length; i++) {
    let cont = 0;
    for (let j = 0; j < arrayInedito.length; j++) {
      if (array[i] === arrayInedito[j]) cont++;
    }
    if (cont === 0) arrayInedito.push(array[i]);
  }

  for (let i = 0; i < arrayInedito.length; i++) {
    let cont = 0;
    for (let j = 0; j < array.length; j++) {
      if (arrayInedito[i] === array[j]) cont++;
    }
    if (cont >= 3) return true;
  }

  return false;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
};
