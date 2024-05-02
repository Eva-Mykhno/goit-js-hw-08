const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const textInputValue = event.currentTarget.value.trim();

  if (textInputValue.length) {
    textOutput.textContent = textInputValue;
  } else {
    textOutput.textContent = 'Anonymous';
  }
});
