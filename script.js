let resultElement = document.getElementById('result');
let currentResult = '';

// Function to append a value to the result
function appendToResult(value) {
  currentResult += value;
  resultElement.value = currentResult;
}

// Function to calculate the result
function calculateResult() {
  try {
    currentResult = eval(currentResult);
    resultElement.value = currentResult;
  } catch (error) {
    resultElement.value = 'Error';
  }
}

// Function to clear the result
function clearResult() {
  currentResult = '';
  resultElement.value = '';
}