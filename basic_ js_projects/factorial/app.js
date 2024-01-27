const factorial = (number) => {
    let mul = 1;
    for (let i = number; i >= 1; i--) {
        mul *= i;
    }
    return mul;
};

console.log(factorial(3));
