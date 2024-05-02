function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const boxes = document.getElementById('boxes');
const fragment = document.createDocumentFragment();

function createBoxes(amount) {
  boxes.innerHTML = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('.box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
    size += 10;
  }
  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

const onCreateBoxes = document.querySelector('[data-create]');
onCreateBoxes.addEventListener('click', () => {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

const buttonDestroy = document.querySelector('[data-destroy]');
buttonDestroy.addEventListener('click', destroyBoxes);
