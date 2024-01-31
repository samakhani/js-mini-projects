const ReversedPyramid = (n) => {
    let string = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
};

const number = 5;
console.log(ReversedPyramid(number));
