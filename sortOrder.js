let sOne = process.argv[2].toLowerCase();
console.log(sOne);
let sTwo = process.argv[3].toLowerCase();
console.log(sTwo);

if (sOne < sTwo) {
    console.log(-1);
} if (sOne === sTwo) {
    console.log(0);
} else if (sOne > sTwo) {
    console.log(1);
}
