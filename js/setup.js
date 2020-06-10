'use strict';

// 1 константы с массивами данных
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// 2 Показываем окно настройки персонажа
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var getRandomName = function () {
  return WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
};

var getRandomSurname = function () {
  return WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
};

var getRandomCoat = function () {
  return COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)];
};

var getRandomEyes = function () {
  return EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
};
// 3 создаем шаблон для магов
var wizards = [
  {
    name: getRandomName() + ' ' + getRandomSurname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName() + ' ' + getRandomSurname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName() + ' ' + getRandomSurname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName() + ' ' + getRandomSurname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
