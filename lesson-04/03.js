/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие 
элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. 
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// let array1 = [1, 2, 3];
// let array2 = [2, 3, 4];
// let array3 = array1.filter(item => array2.includes(item));

// function findCommonElements(arr) {
//     let result = []                          
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result
// }

// console.log(findCommonElements(array3));


let array1 = [1, 2, 3];
let array2 = [2, 3, 4];

function findCommonElements(arr1, arr2) {
        let result = []                          
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
        return result
    }
    
    console.log(findCommonElements(array1, array2));
    