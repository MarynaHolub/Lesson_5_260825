
function factorialIteration(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = i * res;
    }
    return res;
}


function factorialRecursive(n) {
    if (n == 1) {
        return 1;
    }
    let res = n * factorialRecursive(n - 1);
    return res;
}

let n = 6;
console.log(`Факториал итеративно: ` + factorialIteration(n));
console.log(`Факториал рекурсивно: ` + factorialRecursive(n));

