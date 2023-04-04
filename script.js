// Задание 1 
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cube = (num) => {
    return num ** 3;
}
console.log(cube(2)+cube(3));


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно.
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const salary = (money) => {
    return money = money * 0.87;
}

let userAnswer = Number(prompt("Введите число для Задания 2"));
if (isNaN(userAnswer)){
    alert("Значение задано неверно");
}

let result2 = salary(userAnswer);
console.log(`Размер заработной платы за вычетом налогов равен ${result2}`);


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let a = Number(prompt("Введите первое число для Задания 3"));
let b = Number(prompt("Введите второе число для Задания 3"));
let c = Number(prompt("Введите третье число для Задания 3"));
function maxNumber() {
    if (a >= b && a >= c) {
        max = a;
    } else if (b > a && b >= c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}
console.log(maxNumber());


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

let x = Number(prompt("Введите первое число для Задания 4"));
let y = Number(prompt("Введите второе число Задания 4"));
const sum = (number1, number2) => {
    return (number1 + number2);
}
const difference = (number1, number2) => {
    if (number1 >= number2) {
        return (number1 - number2)
    } else {
        return (number2 - number1);
    }
}
const multiplication = (number1, number2) => {
    return (number1 * number2);
}
const division = (number1, number2) => {
    return (number1 / number2);
}
console.log(sum(x, y));
console.log(difference(x, y));
console.log(multiplication(x, y));
console.log(division(x, y));