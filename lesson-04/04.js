/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый 
символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

let str = "hello"

function doubleEachCharacter(string){
    let res = ""
    for (let i = 0; i < string.length; i++){  //char это буква из строки(можно любое слово написать let char of string)
        res = res + string[i] + string[i]                   //+char
        
    }
    return res
} 

console.log(doubleEachCharacter(str));
