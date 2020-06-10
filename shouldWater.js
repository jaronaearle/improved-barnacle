const treeStatus = process.argv[2];

const dryness = process.argv[3];

if (Number(treeStatus) === 0 && Number(dryness) > 10) {
    console.log('WATER');
}