const treeStatus = process.argv[2];

if (Number(treeStatus) === 0) {
    console.log('alive');
} else if (Number(treeStatus) === 1) {
    console.log('flowering');
} else if (Number(treeStatus) === 2) {
    console.log('shedding');
} else {
    console.log('other');
}