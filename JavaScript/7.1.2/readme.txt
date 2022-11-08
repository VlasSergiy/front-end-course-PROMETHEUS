Опис завдання

Створіть class Accumulator, конструктор якого прийматиме startingValue.

Об'єкт, який клас створює, має вміти таке:
- зберігати «поточне значення» у властивості value. Початкове значення передається аргументом конструктора як startingValue.
- метод add(number) одержує число у аргументи та додає його до властивості value. Таким чином, властивість value є поточною сумою всього, що передав користувач під час викликів методу add(number), з урахуванням початкового значення startingValue.
Приклади роботи коду:

class Accumulator {
    constructor(startingValue) {
        // ваша реалізація
    }

    add(number) {
        // ваша реалізація
    };
}

const accumulator = new Accumulator(1);
accumulator.add(2);
accumulator.add(3);
console.log(accumulator.value); //  6

Доповніть функціонал, що описано в робочій області.