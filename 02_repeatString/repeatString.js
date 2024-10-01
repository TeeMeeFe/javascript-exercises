const repeatString = function(string, repeatTimes = 1) {
    let str = '';

    for( let i = 0; i < repeatTimes; i++) {
        str += string;
    }

    return str;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
