const MultiplicationTable = (n) => {
    let row = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
    }
    return row;
};

console.log(MultiplicationTable(3).join(" "));
