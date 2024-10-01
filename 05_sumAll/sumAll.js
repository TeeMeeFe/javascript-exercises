const sumAll = function(startIndex, endIndex) {
    const start = parseInt(Math.min(startIndex, endIndex));
    const end = parseInt(Math.max(startIndex, endIndex));
    let i = start;
    let num = start;

    if( start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number" ) { return 'ERROR' };

    do { 
        num += start + i;
        i++; 
    } 
    while( i < end );

    return num;
};

const result = sumAll(1, 4);
console.log(result);

// Do not edit below this line
module.exports = sumAll;
