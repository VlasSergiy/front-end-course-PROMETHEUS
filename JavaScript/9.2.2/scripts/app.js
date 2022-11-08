const timer = (ms) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timer done!");
        }, ms)
    });

    return promise;
}

async function executeTimer() {
    const result = await timer(2000);
    console.log(result);
  
    console.log("After timer!");
}

executeTimer();