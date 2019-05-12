/* eslint-disable no-alert */

export default () => {
  const firstNumber = document.getElementById('firstNumber');
  const secondNumber = document.getElementById('secondNumber');

  const form = document.getElementById('calcForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const number1 = Number(firstNumber.value);
    const number2 = Number(secondNumber.value);
    const sum = number1 + number2;
    const result = Number(sum.toFixed(10));
    if (Number.isNaN(result)) {
      alert('Разрешается вводить только числа');
    } else {
      alert(`Результат: ${result}`);
    }
  });
};
