const BinaryShow = (n) => {
    return [...n.toString(2).matchAll("1")].length;
};

console.log(BinaryShow(14));
