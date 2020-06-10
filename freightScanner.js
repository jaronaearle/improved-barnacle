const scan = (arr) => {
    let count = 0;
    arr.forEach(item => {
        if (item.toString() === 'contraband') {
            count++;
        }
    });
    return count;
}