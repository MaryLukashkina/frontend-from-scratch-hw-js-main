// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(value1, value2, value3) {
    // return Math.max(value1, value2, value3);
    if (value1 >= value2 && value1 >= value3) {
        return value1;
    } else if (value2 >=value1 && value2 >=value3){
        return value2;
    } else {
        return value3;
    }
}

console.log(findLargest (135, 200, 300));

