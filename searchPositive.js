function searchPositive(numbers) {
    let result = [];
    for (const digit of numbers) {
        if (digit == -1) {
            break
        } else {
            if (digit > 0) {
                result.push(digit);
            }
        }
    }
    return result;
}

const positiveNumbers = searchPositive([2, 3, 0, 1, 5, 1, 2, 45, -1, 3]);
console.log(positiveNumbers);