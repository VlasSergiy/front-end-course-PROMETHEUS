Опис завдання

Реалізуйте функцію під назвою multiply.

Якщо multiply(num1, num2) викликається з двома аргументами, вона має повернути результат множення двох аргументів.

Але якщо вона викликається з одним аргументом const anotherFunc = multiply(num1), то має запам"ятати передане значення і повернути іншу функцію. Та функція, яка повертається, під час виклику anotherFunc(num2) виконує множення num1 * num2.

*Тут використовується концепція, що називається function curring. Ознайомесь, будь ласка, з концепцією перед виконанням завдання: https://medium.com/swlh/currying-in-javascript-bbe4ddedf86b

Приклад використання коду:

function multiply(num1, num2) {
    let number1 = num1;
   
    if(num2 !== undefined) {
        return number1 * num2
    }

    function doMultiply(number2) {
        // ваша реалізація
    };
    return doMultiply;
}

console.log(multiply(4, 5)); //  20
console.log(multiply(3, 3)); //  9
        
const anotherFunc = multiply(2);
        
console.log(anotherFunc(5));  //  10
console.log(anotherFunc(11)); //  22

Доповніть функціонал, що описано в робочій області.