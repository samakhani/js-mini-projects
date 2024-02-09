const CamelCase = (text) => {
    const changeToLowerCase = text.trim().toLowerCase().split(" ");
    const changeToUpperCase = changeToLowerCase.map((item, index) => {
        if (index === 0) {
            return item;
        } else {
            const changeToUpperCase = item.charAt(0).toUpperCase();
            const removeFirstItem = item.substring(1);
            return changeToUpperCase + removeFirstItem;
        }
    });
    return changeToUpperCase.join("");
};

console.log(CamelCase("this is a mini project of javascript"));
