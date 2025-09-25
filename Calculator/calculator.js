export default class Calculator {
  constructor(a, b) {
    this.a = Number(a);
    this.b = Number(b);
  }

  calculate(opString) {
    const op = opString.trim().toLowerCase();
    switch (op) {
      case 'add':
      case '+':
        return this.a + this.b;
      case 'subtract':
      case '-':
        return this.a - this.b;
      case 'multiply':
      case '*':
        return this.a * this.b;
      case 'divide':
      case '/':
        if (this.b === 0) throw new Error('Division by zero');
        return this.a / this.b;
      default:
        throw new Error('Unsupported operation: ' + opString);
    }
  }
}
