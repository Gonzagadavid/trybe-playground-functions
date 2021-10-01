# Playground functions


## Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática:

- Escrever códigos em JavaScript que usam variáveis e tipos primitivos;
- Utilizar conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição no seu código;
- Criar códigos que usam estruturas condicionais, como o if/else ;
- Manipular arrays (listas);
- Utilizar o comando for ;
- Quebrar grandes problemas em pequenos;
- Utilizar a lógica de programação na resolução de problemas;
- Manipular objetos;
- Utilizar o comando for/in ;
- Utilizar funções para organizar e estruturar o seu código;

## Esse projeto foi submetido a testes de 13 requisitos, atingindo 100% dos que foi proposto:

### 1 - Crie uma função usando o operador &&

**O que será verificado:**

- Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true

- Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false

- Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true

### 2 - Crie uma função que calcule a área de um triângulo 

**O que será verificado:**

- Retorne o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50

- Retorne o valor 5 quando a funcão calcArea é chamada com o parâmetro base com o valor 5 e o parâmetro height com o valor 2 espera-se como resultado 5

- Retorne o valor 25.5 quando a funcão calcArea é chamada com o parâmetro base com o valor 51 e o parâmetro height com o valor 1 espera-se como resultado 25.5

### 3 - Crie uma função que divida a frase

**O que será verificado:**

- Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'

- Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'

- Retorne o valor ['foguete'] se a função receber a string 'foguete'

### 4 - Crie uma função que use concatenação de strings

**O que será verificado:**

- Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

- Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName seja ['foguete', 'não', 'tem', 'ré']

- Retorne 'captain, captain' quando o parâmetro passado na funcão concatName seja ['captain', 'my', 'captain']

### 5 - Crie uma função que calcule a quantidade de pontos no futebol

**O que será verificado:**

- Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates

- Retorne 5 pontos quando o time tenha 1 vitória e 2 empates

- Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates

### 6 - Crie uma função que calcule a repetição do maior número

**O que será verificado:**

- Retorne 2 quando o parâmetro passado na função highestCount seja [9, 1, 2, 3, 9, 5, 7]

- Retorne 1 quando o parâmetro passado na função highestCount seja [0, 4, 4, 4, 9, 2, 1]

- Retorne 3 quando o parâmetro passado na função highestCount seja [0, 0, 0]

### 7 - Crie uma função de Caça ao Rato

**O que será verificado:**

- Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

- Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

- Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato

### 8 - Crie uma função FizzBuzz

**O que será verificado:**

- Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz

- Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz

- Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz


### 9 - Crie uma função que Codifique e Decodifique

**O que será verificado:**

- Retorne uma string codificada quando a função encode for utilizada

- Retorne uma string decodificada quando a função decode for utilizada

### 10 - Crie uma função de Lista de Tecnologias

Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado `name` com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

```
{
  tech: "NomeTech",
  name: name
}
```

Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.

Exemplo:
```
Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

Caso o array venha vazio sua função deve retornar 'Vazio!'

**O que será verificado:**

- Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias

- Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias

**Bônus**

### 11 - Crie uma função de Número de Telefone

Crie uma função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` deverá retornar `(12) 34567-8901`.

- Se a função receber um array com tamanho diferente de 11, a mesma deve retornar `"Array com tamanho incorreto."`.

- Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`.

**O que será verificado:**

- Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9

- Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais

- Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações

### 12 - Crie uma função de Condição de existência de um triângulo

Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. Crie uma função chamada `triangleCheck` que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

Para tanto, tenha em mente algumas considerações:

- Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

- Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.

- O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.

**O que será verificado:**

- Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.

- Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.

- Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

### 13 - Crie uma função de boas vindas ao Bar da Trybe!

Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função `hydrate` que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:
```
String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```
