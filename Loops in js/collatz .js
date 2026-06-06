let n =Number(prompt("Enter a positive integer:"));
let steps = 0;
while (n !== 1 && steps < 500) {
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    steps++;
}
console.log(`Total steps to reach 1: ${steps}`);
