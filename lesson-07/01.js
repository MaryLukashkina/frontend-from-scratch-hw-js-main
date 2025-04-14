/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
let str = "hello world from javascript"

function capitalizeWords(string) {
  let res = ''
  let capitalizeNext = true;

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];

    if (currentChar === ' ') {
      res = res + currentChar // Добавляем пробел в результат
      capitalizeNext = true; // Следующий символ будет первым в новом слове
    } else {
      if (capitalizeNext) {
        res = res + currentChar.toUpperCase();
        capitalizeNext = false;// После первого символа следующими не нужно
      } else {
        res = res + currentChar  // Добавляем символ как есть
      }
    }

  }
  return res;
}

console.log(capitalizeWords(str));
