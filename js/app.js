document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.new-animal-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('.delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const handleFormSubmit = function(event) {
  event.preventDefault();

  const animalListElement = createAnimalListElement(event.target);
  setAnimalColour(event.target, animalListElement);

  const animalList = document.querySelector('.animal-list');
  animalList.appendChild(animalListElement);

  event.target.reset();
};

const createAnimalListElement = function(form) {
  const animalListElement = document.createElement('ul');
  animalListElement.classList.add('animal-list-element');

  const name = document.createElement('li');
  name.textContent = form.name.value;
  animalListElement.appendChild(name);

  const type = document.createElement('li');
  type.textContent = form.type.value;
  animalListElement.appendChild(type);

  const status = document.createElement('li');
  status.textContent = form.status.value;
  animalListElement.appendChild(status);

  return animalListElement;
};

const setAnimalColour = function(form, animalListElement) {
  if (form.status.value === 'LC (Least Concern)') {
    animalListElement.classList.add('lc');
  } else if (form.status.value === 'NT (Near Threatened)') {
    animalListElement.classList.add('nt');
  } else if (form.status.value === 'VU (Vulnerable)') {
    animalListElement.classList.add('vu');
  } else if (form.status.value === 'EN (Endangered))') {
    animalListElement.classList.add('en');
  } else if (form.status.value === 'CR (Critically Endangered)') {
    animalListElement.classList.add('cr');
  } else if (form.status.value === 'EW (Extinct in the Wild)') {
    animalListElement.classList.add('ew');
  } else if (form.status.value === 'EX (Extinct)') {
    animalListElement.classList.add('ex');
  }
}

const handleDeleteAll = function(event) {
  const animalList = document.querySelector('.animal-list');
  animalList.innerHTML = '';
};

// Alternative to above wihtout security risks of innerHTML would be:
// const animals = document.querySelectorAll('.animal-list-element');
// for (animal of animals) {
//   animal.remove();
// };
// see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations
