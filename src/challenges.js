// Desafio 1
function compareTrue (booleanA, booleanB) {
  return booleanA && booleanB;
}

// Desafio 2
function calcArea (base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence (string) {
  const array = [];
  let word = '';

  for (let i = 0; i < string.length; i++) {
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

// Desafio 4
function concatName (array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints (wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount (array) {
  let big = array[0];
  let count = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > big) big = array[i];
  }

  for (const number of array) {
    if (number === big) count++;
  }

  return count;
}

// Desafio 7
function catAndMouse (mouse, cat1, cat2) {
  if (cat1 === mouse && cat2 === mouse) {
    return 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz (array) {
  const arrayCopy = [...array];

  for (let i = 0; i < array.length; i++) {
    if (arrayCopy[i] % 3 === 0 && arrayCopy[i] % 5 === 0) {
      arrayCopy[i] = 'fizzBuzz';
    } else if (arrayCopy[i] % 3 === 0) {
      arrayCopy[i] = 'fizz';
    } else if (arrayCopy[i] % 5 === 0) {
      arrayCopy[i] = 'buzz';
    } else {
      arrayCopy[i] = 'bug!';
    }
  }

  return arrayCopy;
}

// Desafio 9
const codes = { a: '1', e: '2', i: '3', o: '4', u: '5' };
const vowels = 'aeiou';

function encode (string) {
  let stringCode = '';

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      stringCode += codes[string[i]];
    } else {
      stringCode += string[i];
    }
  }

  return stringCode;
}

function decode (stringCode) {
  let string = '';

  for (let i = 0; i < stringCode.length; i++) {
    const number = Number(stringCode[i]);
    if (!isNaN(number) && number > 0) {
      string += vowels[number - 1];
    } else {
      string += stringCode[i];
    }
  }

  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence
};
