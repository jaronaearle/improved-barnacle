const calculateMass = (arr) => {
    let tMass = 0;
    
    if (arr.length > 0) {
        let mass = arr.reduce((acc, cv) => {
        if (acc) {
            tMass += acc.length
        }
        tMass += cv.length;
    });
    }
    return tMass;
}
