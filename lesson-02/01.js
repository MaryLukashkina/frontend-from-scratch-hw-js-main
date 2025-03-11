/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true          //статус администратора
const isVerifiedUser = false      //подтвержден пользователем
const hasSpecialPermission = true   //специальное разрешение
const hasTemporaryPass = false       //временный пропуск

let isAccess //доступ

if(
    (isAdmin === true && hasSpecialPermission === true)||isVerifiedUser ===true||hasTemporaryPass===true)
    {
    isAccess = true 
    console.log('Доступ получен');
    
}else{
    isAccess =  false
    console.log("Доступ не получен");
    
}




// your code
