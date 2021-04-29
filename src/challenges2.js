// impotada funções feitas em challenges para reutilizar a função splitSentence na função hydrate
const fn = require('./challenges');

// Desafio 10

// retorna um array com as duas strings recebidas por parametro e o retorna ordenado de acordo com o
// unicode obtido através do método String.charCodeAt(), caso duas string comecem pela mesma letra,
// é ordenado pela segunda letra.
function order(word1, word2) {
  if (word1[0] === word2[0]) {
    return word1.slice(1).charCodeAt() < word2.slice(1).charCodeAt()
      ? [word1, word2] : [word2, word1];
  }
  if (word1.charCodeAt() > word2.charCodeAt()) return [word2, word1];
  return [word1, word2];
}

// clona o array de strings passado por parâmetro e o percorre ordenando através da função order
function sort(array) {
  const arrayCopy = [...array];

  for (let j = 0; j < arrayCopy.length - 1; j += 1) {
    for (let i = 0; i < arrayCopy.length - 1; i += 1) {
      let [menor, maior] = order(arrayCopy[i], arrayCopy[i + 1]);
      arrayCopy[i] = menor;
      arrayCopy[i + 1] = maior;
    }
  }
  return arrayCopy;
}

function techList(technologies, name) {
  if (technologies.length === 0) return 'Vazio!';
  const technologiesOrder = sort(technologies);
  const list = [];
  for (let index = 0; index < technologiesOrder.length; index += 1) {
    list.push({ tech: technologiesOrder[index], name });
  }
  return list;
}

// Desafio 11

// recebe um array e retorna um novo array sem items repetidos
function uniqueNumbers(array) {
  const arrayUnique = [];

  for (let i = 0; i < array.length; i += 1) {
    if (!arrayUnique.includes(array[i])) {
      arrayUnique.push(array[i]);
    }
  }
  return arrayUnique;
}

// recebe um array e um item como parametro e retorna a  quantidade de vezes que este item
// contém no array
function contRepeat(array, item) {
  let cont = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === item) cont += 1;
  }
  return cont;
}

// retorna o valor booleano true caso o array passado por parâmetro possua um numero repetido n ou mais
// vezes e false caso não.
function numberRepeat(array, n) {
  const arrayUnique = uniqueNumbers(array);

  for (let i = 0; i < arrayUnique.length; i += 1) {
    let moreRepeat = contRepeat(array, arrayUnique[i]);
    if (moreRepeat >= n) return true;
  }
  return false;
}

// verifica se algum item do array passa o limite maximo ou minimo retornando true se passar e false
// caso contrário
function checkLimite(array, min, max) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > max || array[i] < min) return true;
  }
  return false;
}

// recebe um array e retorna os items convertidos para string
function toString(array) {
  const arrStrings = [];
  for (let i = 0; i < array.length; i += 1) {
    arrStrings.push(array[i].toString());
  }
  return arrStrings;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  if (numberRepeat(array, 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  if (checkLimite(array, 0, 9)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const arrStrings = toString(array);

  let prefix = `${arrStrings[0]}${arrStrings[1]}`;
  let start = `${arrStrings[2]}${arrStrings[3]}${arrStrings[4]}${arrStrings[5]}${arrStrings[6]}`;
  let end = `${arrStrings[7]}${arrStrings[8]}${arrStrings[9]}${arrStrings[10]}`;

  return `(${prefix}) ${start}-${end}`;
}

// Desafio 12

// verifica se compared é maior que a soma de valueA com valueB, caso seja retona true,
// caso não retorna false
function compare(compared, valueA, valueB) {
  const sum = valueA + valueB;
  return compared < sum;
}

// verifica se o compared é menor do que o valor absoluto da diferença entre valueA e ValueB e retorna
// true se sim e false se não
function checkAbs(compared, valueA, valueB) {
  const diference = valueA - valueB;
  return compared > Math.abs(diference);
}

// verifica de nenhum é maior que a soma dos dois lados retornado false se sim e true se não
function checkCompare(lineA, lineB, lineC) {
  return compare(lineA, lineB, lineC) && compare(lineB, lineC, lineA)
  && compare(lineC, lineA, lineB);
}

// verifica de nenhum é menor que a diferença dos dois lados retornado false se sim e true se não
function checkAbsolut(lineA, lineB, lineC) {
  return checkAbs(lineA, lineB, lineC) && checkAbs(lineB, lineC, lineA)
    && checkAbs(lineC, lineA, lineB);
}

function triangleCheck(lineA, lineB, lineC) {
  return checkCompare(lineA, lineB, lineC) && checkAbsolut(lineA, lineB, lineC);
}

// Desafio 13
function hydrate(string) {
  const array = fn.splitSentence(string);
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    const number = parseInt(array[i], 10);
    if (!Number.isNaN(number)) sum += number;
  }
  return sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
