const getNumber = (number) => {
    if (number > 0) {
        return "Positive";
    } else if (number === 0) {
        return "zero";
    } else return "Negative";
};

const addNumber = getNumber(0);
console.log(addNumber);
