document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
  
    let currentInput = '';
    let calculationInProgress = false;
  
    function addToInput(value) {
      if (calculationInProgress) {
        display.value = '';
        calculationInProgress = false;
      }
      currentInput += value;
      display.value += value;
    }
  
    function calculate() {
      display.value = eval(currentInput);
      currentInput = display.value;
      calculationInProgress = true;
    }
  
    function clearLast() {
      currentInput = currentInput.slice(0, -1);
      display.value = display.value.slice(0, -1);
    }
  
    function clearAll() {
      currentInput = '';
      display.value = '';
    }
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.dataset.value;
        switch (value) {
          case '=':
            calculate();
            break;
          case 'C':
            clearAll();
            break;
          case 'CE':
            clearLast();
            break;
          default:
            addToInput(value);
            break;
        }
      });
    });
  });
  