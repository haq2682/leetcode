/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const result = Number.parseInt(s);
    if(result) {
        if(result <= -Math.pow(2, 31)) return -Math.pow(2, 31);
        else if(result >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;
        else return result;
    }
    return 0;
};