function multiply(num1, num2) {
    let number1 = num1;
   
    if(num2 !== undefined) {
        return number1 * num2
    }

    function doMultiply(number2) {
        return number1 * number2; // ваша реалізація
    };
    return doMultiply;
}
      