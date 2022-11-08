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
Promise.all([funcOne(), funcTwo()])
    .then((arr) => {
        console.log(arr[0]);
        console.log(arr[1]);
    });