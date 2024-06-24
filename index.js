document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector('.newDiv7');
  console.log(element);
  console.log(getComputedStyle(element).getPropertyValue('--my-width')); // 480px
  console.log(getComputedStyle(element).getPropertyValue('--header-width')); // 60px
  console.log(getComputedStyle(element).getPropertyValue('--footer-width')); // 100px
  console.log(getComputedStyle(element).width); // Should be 320px

  // Проверка расчета переменных
  const myWidth = parseFloat(getComputedStyle(element).getPropertyValue('--my-width'));
  const headerWidth = parseFloat(getComputedStyle(element).getPropertyValue('--header-width'));
  const footerWidth = parseFloat(getComputedStyle(element).getPropertyValue('--footer-width'));
  const calculatedWidth = myWidth - headerWidth - footerWidth;
  console.log(calculatedWidth); // Должно быть 320
});
