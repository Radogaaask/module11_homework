function sum(x) {
    return function(y) {
        return x + y;
    };
}

console.log(sum(3)(4));
// В скобки можно ввести любые числа для получения суммы