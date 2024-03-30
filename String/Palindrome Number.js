/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString();
    let i = 0;
    let j = y.length - 1;
    while(i < j) {
        if(y[i] !== y[j]) return false;
        i++;
        j--;
    }
    return true;
};