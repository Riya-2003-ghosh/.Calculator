function clearDisplay() {
  document.getElementById('display').value = '';
}
function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
function insert(value) {
  document.getElementById('display').value += value;
}
function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}