const IsPrime = (n) => {
    if (n === 1) return "One is not Prime";
    if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return `${n} is not prime`;
            }
        }
    }
    return `${n} is Prime`;
};
console.log(IsPrime(5));
console.log(IsPrime(9));
