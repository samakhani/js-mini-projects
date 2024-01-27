const array = [2, 3, 4, 5, 6, 7, 8, 12, 34];

const someOfNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(someOfNumbers(array));
