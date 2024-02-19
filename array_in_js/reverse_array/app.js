const ReverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

const array = [2, 3, 4, 5, 6, 7, 8, 12, 34];
console.log(ReverseArray(array));
