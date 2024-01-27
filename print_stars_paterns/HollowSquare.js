const HollowSquare = (n) => {
    if (n > 2) {
        let string = "";
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0 || i === n - 1) {
                    string += "*";
                } else {
                    if (j === 0 || j === n - 1) {
                        string += "*";
                    } else string += " ";
                }
            }
            string += "\n";
        }
        return string;
    } else {
        return "Enter more than 2";
    }
};

const number = 3;
console.log(HollowSquare(number));
