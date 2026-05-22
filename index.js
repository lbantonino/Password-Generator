const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];
let btnGenerate = document.querySelector('.btn-generate');
let firstChoice = document.querySelector('.first-choice');
let secondChoice = document.querySelector('.second-choice');

// Creer un fonction qui va générer un mot de passe
// looper dans l'array pour prendre les characters de manière random

function generatePwd() {
  let passwordLength = 16;
  //first choice
  firstChoice.textContent = '';
  secondChoice.textContent = '';
  for (let i = 0; i < passwordLength; i++) {
    let randomCharacter = Math.floor(Math.random() * characters.length);
    let randomCharacter2 = Math.floor(Math.random() * characters.length);
    firstChoice.textContent += characters[randomCharacter];
    secondChoice.textContent += characters[randomCharacter2];
  }
}

/*
function generateOnePassword() {
  let password = '';
  let passwordLength = 16;

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

function generatePwd() {
  firstChoice.textContent = generateOnePassword();
  secondChoice.textContent = generateOnePassword();
}
*/

btnGenerate.addEventListener('click', generatePwd);
