function SquareStar(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}
const number = 2;
console.log(SquareStar(number));
