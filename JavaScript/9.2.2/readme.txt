Опис завдання

Зараз функція executeTimer виводить в консоль повідомлення:

// [object Promise] { ... }
// "After timer!"

Полагодьте функцію executeTimer за допомогою використання async/await, де необхідно, щоб повідомлення в консолі були:

// "Timer done!"
// "After timer!"

Скопіюйте шаблон в робочу область та завершіть реалізацію функціоналу:

const timer = (ms) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timer done!");
        }, ms)
    });

    return promise;
}

function executeTimer() {
    const result = timer(2000);
    console.log(result);
  
    console.log("After timer!");
}

executeTimer();