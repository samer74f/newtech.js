function flatUnique(arr) {
    let flat = arr.flat();
    let result = [];
    for (let i = 0; i < flat.length; i++) {
        if (!result.includes(flat[i])) {
            result.push(flat[i]);
        }
    }
    result.sort((a, b) => a - b);
    return result;
}
const input = [[3, 1, 4], [1, 5, 9], [2, 6, 5], [3,5]];
console.log(flatUnique(input));
