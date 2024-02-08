const PrintWord = (n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "o";
    }
    return str;
};

console.log("W" + PrintWord(3) + "W");
