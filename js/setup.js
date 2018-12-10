'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_LASTNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var COUNT_WIZARDS = 4;

// рандомный элемент массива
var getRandomElementFromArray = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');
// document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// var WIZARDS = [];
// var TEST = {
//   name: getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_LASTNAMES),
//   coatColor: getRandomElementFromArray(COAT_COLORS),
//   eyesColor: getRandomElementFromArray(EYE_COLORS)
// };

// var generateWizard = function () {
//   return {
//     name: getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_LASTNAMES),
//     coatColor: getRandomElementFromArray(COAT_COLORS),
//     eyesColor: getRandomElementFromArray(EYE_COLORS)
//   };
// };

// var wizardElement = similarWizardTemplate.cloneNode(true);
// similarListElement.appendChild(wizardElement);

// var wizardElement1 = similarWizardTemplate.cloneNode(true);
// similarListElement.appendChild(wizardElement1);

// var wizardElement2 = similarWizardTemplate.cloneNode(true);
// similarListElement.appendChild(wizardElement2);

// var getCoatColor = function() {
//   var randomIndex = Math.floor(Math.random() * COAT_COLORS.length);
//   return COAT_COLORS[randomIndex];
// }
// console.log(getCoatColor());

// var getEyeColor = function() {
//   var randomIndex = Math.floor(Math.random() * EYE_COLORS.length);
//   return EYE_COLORS[randomIndex];
// }

var cloneWizard = function () {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_LASTNAMES);
    wizardElement.querySelector('.wizard-coat').style.fill = getRandomElementFromArray(COAT_COLORS);
    wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElementFromArray(EYE_COLORS);
  }
  return wizardElement;
};

// cloneWizard();

var fragment = document.createDocumentFragment();
for (var i = 0; i < COUNT_WIZARDS; i++) {
  fragment.appendChild(cloneWizard());
}
similarListElement.appendChild(fragment);
