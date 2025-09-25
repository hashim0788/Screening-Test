import Calculator from './calculator.js';

const elA = document.getElementById('a');
const elB = document.getElementById('b');
const elOp = document.getElementById('op');
const btnCalc = document.getElementById('calc');
const btnClear = document.getElementById('clear');
const out = document.getElementById('result');

function showResult(text) {
  out.textContent = text;
}

btnCalc.addEventListener('click', () => {
  const aVal = parseFloat(elA.value);
  const bVal = parseFloat(elB.value);
  const opVal = elOp.value;

  if (!opVal.trim()) return showResult('Please enter an operation.');
  if (Number.isNaN(aVal) || Number.isNaN(bVal))
    return showResult('Please enter valid numbers for a and b.');

  const calc = new Calculator(aVal, bVal);
  try {
    const raw = calc.calculate(opVal);
    const formatted = Number.isFinite(raw) ? +raw.toFixed(6) : raw;
    showResult(`${aVal} ${opVal.trim()} ${bVal} = ${formatted}`);
  } catch (err) {
    showResult('Error: ' + err.message);
  }
});

btnClear.addEventListener('click', () => {
  elA.value = '';
  elB.value = '';
  elOp.value = '';
  showResult('Result will appear here');
});

[elA, elB, elOp].forEach(inp => {
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      btnCalc.click();
    }
  });
});
