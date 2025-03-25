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
    for (let char of string){  //char это буква из строки(можно любое слово написать)
        res = res + char + char
        
    }
    return res
} 

console.log(doubleEachCharacter(str));
