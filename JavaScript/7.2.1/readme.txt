Опис завдання

Факторіал.

У математиці факторіал цілого невід’ємного числа n, що позначається n!, є добутком усіх натуральних чисел, менших або рівних n. Наприклад, 5! = 5 x 4 x 3 x 2 x 1 = 120

Нижче, ви знайдете рекурсію, яка рахує факторіал, але рекурсія не знає коли зупинитись. Ваше завдання додати базу рекурсії окремою умовою.

Приклад використання коду:

function factorial(num) {
    // ваше рішення

    return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

Доповніть функціонал, що описано в робочій області.