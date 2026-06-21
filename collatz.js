let n = parseInt(prompt("Enter a positive integer: "));
let steps = 0;
while (n !== 1 && steps < 500) {
    console.log(n);
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }
    steps++;
}

if (n === 1) {
    console.log(`Reached 1 in ${steps} steps.`);
} else {
    console.log("Stopped after 500 steps without reaching 1.");
}