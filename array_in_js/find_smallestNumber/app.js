function smallestNumber(arr) {
    let smallestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
}

const num1 = [30, 15, 18, 20, 10, 23];
const result = smallestNumber(num1);

console.log("The smallest element in the array is:" + result);
