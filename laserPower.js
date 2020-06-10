const calculatePower = (arr) => {
    arr = arr.map(i => i * 2);
    let s = 0;
    arr.forEach(i => {
        s += i;
    });
    return s;
}
