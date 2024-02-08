const Fibonacci = (n) => {
    let arr = [];
    if (n >= 1) arr.push(0);
    if (n >= 2) arr.push(1);
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        return arr;
    }
};

console.log(Fibonacci(8).join(","));
