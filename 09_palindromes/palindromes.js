const palindromes = function (str) {
    const original = (string) => string.split("").join();
    const reversed = (string) => string.split("").reverse().join();
    for( let i = 0; i < str.length; i++) {
        let spliced = str.substr(0, i) + str.substr(i + 1);
        if( original(spliced) === reversed(spliced) ) { return true };
    }
    return false;
};

const stringy = "Animal loots foliated detail of stool lamina."

console.log(palindromes(stringy));
console.log(stringy.split("").join());
console.log(stringy.split("").reverse().join());

// Do not edit below this line
module.exports = palindromes;
