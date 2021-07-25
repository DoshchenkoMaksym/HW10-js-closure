function sum(x) {
    let calc = x;
    return function(y) {
        return calc = x + y;
    };
};

const sum1 = sum(1);

sum1(2);

 /*    const sum1 = sum(1);
    sum1(2); // результат выполнения 3
    или 
        вызов sum(1)(2); // результат выполнения 3
     */