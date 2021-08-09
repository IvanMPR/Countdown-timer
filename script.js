'use-script';
// /////////////////////////////////////////////////////
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
// /////////////////////////////////////////////////////
const hoursInput = document.querySelector('.hours-input');
const minutesInput = document.querySelector('.minutes-input');
const secondsInput = document.querySelector('.seconds-input');
// //////////////////////////////////////////////////////
const inputs = document.querySelectorAll('input');
// //////////////////////////////////////////////////////
const outputP = document.querySelector('.output-p');
// //////////////////////////////////////////////////////
function clearInputs() {
  inputs.forEach(input => (input.value = ''));
}
// //////////////////////////////////////////////////////
function checkInputs() {
  return Array.from(inputs).some(input => isNaN(input.value));
}
// //////////////////////////////////////////////////////
function displayMinutes(secondsValue) {
  if (secondsValue < 3600) {
    return String(Math.trunc(secondsValue / 60)).padStart(2, 0);
  } else {
    return String(Math.trunc((secondsValue % 3600) / 60)).padStart(2, 0);
  }
}
// //////////////////////////////////////////////////////
function startTimer() {
  // //////////////////////////////////////////////////////
  if (checkInputs()) {
    alert('Enter Numeric Values Only !');
    clearInputs();
    return;
  }

  // //////////////////////////////////////////////////////
  const hoursInputValue =
    hoursInput.value === '' ? 0 : +hoursInput.value * 3600;
  const minutesInputValue =
    minutesInput.value === '' ? 0 : +minutesInput.value * 60;
  const secondsInputValue = secondsInput.value === '' ? 0 : +secondsInput.value;
  // //////////////////////////////////////////////////////////////////////
  let total = hoursInputValue + minutesInputValue + secondsInputValue;
  // //////////////////////////////////////////////////////////////////////
  // Default value of 1 minute, if all fields are empty
  if (total === 0) {
    total = 60;
  }
  if (total > 86400) {
    alert('You exceeded maximum allowed time of 24 hours');
    clearInputs();
    total = 0;
  }
  // //////////////////////////////////////////////////////////////////////
  const timer = setInterval(() => {
    outputP.textContent = `${String(Math.trunc(total / 3600)).padStart(
      2,
      0
    )} : ${displayMinutes(total)} : ${String(Math.trunc(total % 60)).padStart(
      2,
      0
    )}`;
    // //////////////////////////////////////////////////////////////////////
    total--;
    // //////////////////////////////////////////////////////////////////////
    if (total === -1) {
      clearInterval(timer);
      btnStart.style.pointerEvents = 'auto';
    }
  }, 1000);
  btnStart.style.pointerEvents = 'none';
  // /////////////////////////////////////////////////////////
  btnReset.addEventListener('click', () => {
    clearInterval(timer);
    clearInputs();
    outputP.textContent = `00 : 00 : 00`;
    total = 0;
    btnStart.style.pointerEvents = 'auto';
  });
}
// /////////////////////////////////////////////////////////
btnStart.addEventListener('click', startTimer);
