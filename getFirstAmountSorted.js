const getFirstAmountSorted = (arr, num) => {
    let sArr = arr.sort();

    return sArr.slice(0, num);
}