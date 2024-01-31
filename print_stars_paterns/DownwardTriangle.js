const DownwardTriangle = (n) => {
    let string = "";
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
};

const number = 5;
console.log(DownwardTriangle(number));
