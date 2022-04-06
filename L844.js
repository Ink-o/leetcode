// var backspaceCompare = function(s, t) {
//     function caculate(nums) {
//         let numsArr = nums.split('');
//         let slow = numsArr.length - 1,
//             fast = numsArr.length - 1,
//             len = numsArr.length;
//         while (fast >= 0 && slow >= 0) {
//             // 找到倒数第一个为#的字符串
//             if (numsArr[slow] === '#') {
//                 while(fast-- > slow || nums[fast] === '#' || nums[fast] === '');
//                 numsArr[fast] = '';
//                 numsArr[slow] = '';
//             }
//             slow--;
//         }
//         // 对未处理的#统一替换成空格
//         return numsArr.join('').replace(/#/g, '');
//     }
//     return caculate(s) === caculate(t);
// };

// 评论解法
var backspaceCompare = function(s, t) {
    function caculate(nums) {
        let numsArr = nums.split('');
        let slow = 0;
        for (let fast = 0; fast < numsArr.length; fast++) {
            if (nums[fast] !== '#') {
                numsArr[slow++] = nums[fast];
            } else if (nums[fast] === '#' && slow !== 0) {
                // 当fast指针遇到#，slow指针进行回退，直到到达0索引
                slow--;
            }
        }
        return numsArr.slice(0, slow).join('');
    }
    return caculate(s) === caculate(t);
};
backspaceCompare("a##c","#a#c");