// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

console.log(`${0} – это ноль`);
for (let i = 1; i < 11; i++) {
    if (i % 2 == 1) {
        console.log(`${i} – нечетное число `);
    }
    if (i % 2 == 0) {
        console.log(`${i} – четное число `);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
let sum = 0;
let result = false;

for (let i = 0; i < 5; i++) {
    array[i] = Math.round(Math.random() * 9)
};
console.log(array);

let minNum = array[0];
for (let i = 0; i < array.length; i++) {
    const num = array[i];
    sum += num;
    if (num < minNum) {
        minNum = num; 
    }
    if (num == 3) {
        result = true;
    }
}
console.log(sum);
console.log(minNum);
console.log(result);

// Задание 4 
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let str = "";
for(let i = 0; i < 20; i++){ 
    console.log(str =  str + "x");
}

