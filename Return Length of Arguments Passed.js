var argumentsLength = function (...agrs) {
    let count = 0;
    for (let i = 0; i < agrs.length; i++) {
        if (agrs[i] !== undefined) {
            count++;
        }
    }
    return count;
};

argumentsLength([5]);