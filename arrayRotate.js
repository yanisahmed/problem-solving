function rotateLeft(d, arr) {
    // Write your code here
    let result = [];
    for (let i = 0; i < d; i++) {
        let shitItem = arr.shift(i);
        result.push(shitItem);
    }



    return arr.concat(result);
}

const rotatedArray = rotateLeft(4, [1, 2, 3, 4, 5]);
console.log(rotatedArray);