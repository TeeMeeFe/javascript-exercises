const palindromes = function (str) {
    const original = (string) => string.split(" ").join();
    const reversed = (string) => string.split(" ").reverse().join();
    for( let i = 0; i < str.length; i++) {
        let spliced = str.substr(0, i) + str.substr(i+1);
        if( original(spliced) === reversed(spliced) ) { return true };
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
