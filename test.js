// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// let template = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['j', 'k', 'l'],
//     ['m', 'n', 'o'],
//     ['p', 'q', 'r', 's'],
//     ['t', 'u', 'v'],
//     ['w', 'x', 'y', 'z'],
// ]
// let cur = [];
// let result = [];
// var letterCombinations = function(digits) {
//     digits = digits.split('');
//     progress(digits, template, 0);
// };
// function progress(digits, template, nowIndex) {
//     if (cur.length === digits.length) {
//         console.log('[ cur ] >', cur)
//         result.push([...cur].join(''));
//         return;
//     }
//     if (nowIndex >= digits.length) {
//         return;
//     }
//     let index = digits[nowIndex] - 2; // 当前对应模板索引
//     let now = template[index]; // 当前位置对应的字符映射
//     let curLength = now.length; // 所对应模板长度

//     for (let i = nowIndex; i <= digits.length - 1; i++) {
//         for (let j = 0; j < curLength; j++) {
//             cur.push(now[j]);
//             progress(digits, template, i + 1);
//             cur.pop();
//         }
//     }
// }
// letterCombinations('23');
// console.log(result);


let cur = [];
let result = [];
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let template = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ]
    if (digits.length === 1) {
        result = template[digits[0]];
        return;
    }
    digits = digits.split('');
    return progress(digits, template, 0, cur, result);
};
function progress(digits, template, nowIndex, cur, result) {
    if (cur.length === digits.length) {
        result.push([...cur].join(''));
        return;
    }
    for (var i = 0; i < template[digits[nowIndex]].length; i++) {
        cur.push((template[digits[nowIndex]])[i]);                                                                                                                                                                                 
        progress(digits, template, nowIndex + 1, cur, result);
        cur.pop();
    }
    return;
}
letterCombinations('23');
console.log(result);
