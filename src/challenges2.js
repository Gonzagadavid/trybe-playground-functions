// impotada funções feitas em challenges para reutilizar a função splitSentence na função hydrate
// const fn = require('./challenges');

// Desafio 10
function techList(technologies, name) {
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
function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (numberRepeat(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let prefix = '';
  let start = '';
  let end = '';

  for (let i = 0; i < array.length; i += 1) {
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

function triangleCheck(lineA, lineB, lineC) {
  if (compare(lineA, lineB, lineC)) return false;
  if (compare(lineB, lineC, lineA)) return false;
  if (compare(lineC, lineA, lineB)) return false;

  if (checkAbs(lineA, lineB, lineC)) return false;
  if (checkAbs(lineB, lineC, lineA)) return false;
  if (checkAbs(lineC, lineA, lineB)) return false;

  return true;
}

// Desafio 13
function hydrate(string) {
  const array = splitSentence(string);
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    const number = parseInt(array[i]);
    if (!Number.isNaN(number)) sum += number;
  }

  return `${sum} copos de água`;
}

// funções auxiliares-------------------------------------------------------------------------------

// clona o array de strings passado por parâmetro e o retorna ordenado de acordo com o unicode obtido
// através do método String.charCodeAt(), caso duas string comecem pela mesma letra, é ordenado pela
// segunda letra.
function sort (array) {
  const arrayCopy = [...array];
  let memory = '';
  for (let j = 0; j < arrayCopy.length - 1; j += 1) {
    for (let i = 0; i < arrayCopy.length - 1; i += 1) {
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

// retorna o valor booleano true caso o array passado por parâmetro possua um numero repetido 3 ou mais
// vezes e false caso não.
function numberRepeat (array) {
  const arrayInedito = [];

  for (let i = 0; i < array.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < arrayInedito.length; j += 1) {
      if (array[i] === arrayInedito[j]) cont++;
    }
    if (cont === 0) arrayInedito.push(array[i]);
  }

  for (let i = 0; i < arrayInedito.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (arrayInedito[i] === array[j]) cont++;
    }
    if (cont >= 3) return true;
  }

  return false;
}

// verifica se compared é maior que a soma de valueA com valueB, caso seja retona true,
// caso não retorna false
function compare (compared, valueA, valueB) {
  const sum = valueA + valueB;
  return compared > sum;
}

// verifica se o compared é menor do que o valor absoluto da diferença entre valueA e ValueB e retorna
// true se sim e false se não
function checkAbs (compared, valueA, valueB) {
  const diference = valueA - valueB;
  return compared < Math.abs(diference);
}

// reaproveitando o desafio 3 na função hydate
function splitSentence(string) {
  const array = [];
  let word = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      word += string[i];
    } else {
      array.push(word);
      word = '';
    }
  }
  array.push(word);
  return array;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
};
