const Pyramid = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
};

const number = 5;
console.log(Pyramid(number));
