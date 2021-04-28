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

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName () {
  // seu código aqui
}

// Desafio 5
function footballPoints () {
  // seu código aqui
}

// Desafio 6
function highestCount () {
  // seu código aqui
}

// Desafio 7
function catAndMouse () {
  // seu código aqui
}

// Desafio 8
function fizzBuzz () {
  // seu código aqui
}

// Desafio 9
function encode () {
  // seu código aqui
}
function decode () {
  // seu código aqui
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
