const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

const addNumber = (l1, l2) => {
    let reminder = 0;
    let sumArray = [];
    const i = Math.max(l1.length, l2.length);
    let j = 0;
    while (j < i || reminder !== 0) {
        let digit1 = j < l1.length ? l1[j] : 0;
        let digit2 = j < l2.length ? l2[j] : 0;
        let sum = digit1 + digit2 + reminder;

        reminder = Math.floor(sum / 10);
        sumArray.push(sum % 10);
        j++;
    }
    return sumArray;
};
const a = addNumber(l1, l2);
console.log('sum of array is:', a);
console.log("hello guyes")
console.log("hello guyes")
