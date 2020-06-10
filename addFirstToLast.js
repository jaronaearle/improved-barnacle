const addFirstToLast = (strArr) => {
    let firstLast = '';

    if (strArr.length > 0) {
        firstLast = strArr[0] + strArr[strArr.length - 1];
    } 
    return firstLast;
}