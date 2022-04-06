/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0,j = s.length - 1; i<j; i++,j--) {
        swap(s, i, j);
    }
    function swap(obj, a, b) {
        const _ = obj[a];
        obj[a] = obj[b];
        obj[b] = _;
    }
    console.log(s);
};
console.log(reverseString(["h","e","l","l","o"]));