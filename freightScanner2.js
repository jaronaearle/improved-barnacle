const scan = (arr) => {
    let outArr = [];

    arr.forEach((item, i) => {
        if (item.toString() === 'contraband') {
            outArr.push(i);
        }
    });

    return outArr;
}