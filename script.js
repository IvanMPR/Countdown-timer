'use-script';
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
// /////////////////////////////////////////////////////
const hoursInput = document.querySelector('.hours-input');
const minutesInput = document.querySelector('.minutes-input');
const secondsInput = document.querySelector('.seconds-input');
// //////////////////////////////////////////////////////
const hoursOutput = document.querySelector('.hours-output');
const minutesOutput = document.querySelector('.minutes-output');
const secondsOutput = document.querySelector('.seconds-output');
// //////////////////////////////////////////////////////
function checkInputs() {
  if (
    !isFinite(+hoursInput) ||
    !isFinite(+minutesInput) ||
    !isFinite(+secondsInput)
  ) {
    alert('Enter numeric values only !');
    clearInputs();
    return;
  }
}
function clearInputs() {
  document.querySelectorAll('input').forEach(input => (input.value = ''));
}

function startTimer() {
  setInterval(() => {
    const hoursInputValue =
      hoursInput.value === '' ? 0 : +hoursInput.value * 3600;
    const minutesInputValue =
      minutesInput.value === '' ? 0 : +minutesInput.value * 60;
    const secondsInputValue =
      secondsInput.value === '' ? 0 : +secondsInput.value;

    let total = hoursInputValue + minutesInputValue + secondsInputValue;

    hoursOutput.textContent = Math.trunc(total / 3600);
    minutesOutput.textContent = Math.trunc(total / 60);
    secondsOutput.textContent = Math.trunc(total % 3600);
    total--;
  }, 1000);

  // return hoursInputValue;
}
btnStart.addEventListener('click', startTimer);
btnReset.addEventListener('click', clearInputs);
