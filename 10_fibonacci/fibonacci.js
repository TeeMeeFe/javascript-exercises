const fibonacci = function(a) {
    let f_0 = 0;
    let f_1 = 1;
    let sum;
    if( a < 0 ) { return "OOPS" }
    else if( a == 0 ) { return 0 }
    else if( a == 1 || a == 2 ) { return 1 }
    else {
        for( let i = 2; i <= a; i++ ){
            sum = f_0 + f_1;
            f_0 = f_1;
            f_1 = sum;
        }
    }
    return sum;
};  

console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
