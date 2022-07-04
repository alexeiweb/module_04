export const calc = () => {
  const resultInner = document.querySelector('.calc__result'); /* получаем элемент по классу */

  const calcBtn = document.querySelectorAll('.calc__btn'); /* получаем все элементы по классу */

  calcBtn.forEach((item) => {
    item.addEventListener('click', function() { /* если click, стрелочную функцию не применяем */
      const num1 = Number(document.getElementById('x').value); /* value, потому что достаем значение */
      const num2 = Number(document.getElementById('y').value);
      let getElem = this.textContent;
      let result;
      
      switch (getElem) {
        case '+':
          result = num1 + num2;
          break;
          
        case '-':
          result = num1 - num2;
          break;

        case 'х':
          result = num1 * num2;
          break;

        default:
          result = num1 / num2;
          break;
      }
      debugger;
      resultInner.innerHTML = result; /* вставляем полученное значение в верстку */
    });  
  }); 
};