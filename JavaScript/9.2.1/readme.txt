Опис завдання

Скопіюйте шаблон в робочу область та завершіть реалізацію функціоналу так, щоб повідомлення з обидвох промісів виводились в консоль одночасно.

const funcOne = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("First timer done!");
        }, 2000)
    });
}

const funcTwo = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Second timer done!");
        }, 3000)
    });
}

// ваша реалізація 
    .then((arr) => {
        console.log(arr[0]);
        console.log(arr[1]);
    });