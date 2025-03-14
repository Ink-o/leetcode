// 空间复杂度也为On
// var backspaceCompare = function (s, t) {
//   function caculate(nums) {
//     let numsArr = nums.split('');
//     let slow = numsArr.length - 1,
//       fast = numsArr.length - 1,
//       len = numsArr.length;
//     while (fast >= 0 && slow >= 0) {
//       // 找到倒数第一个为#的字符串
//       if (numsArr[slow] === '#') {
//         while (fast-- > slow || nums[fast] === '#' || nums[fast] === '');
//         numsArr[fast] = '';
//         numsArr[slow] = '';
//       }
//       slow--;
//     }
//     // 对未处理的#统一替换成空格
//     return numsArr.join('').replace(/#/g, '');
//   }
//   return caculate(s) === caculate(t);
// };

// 评论解法（空间复杂度还是On）
// var backspaceCompare = function (s, t) {
//   function caculate(nums) {
//     let numsArr = nums.split('');
//     let slow = 0;
//     for (let fast = 0; fast < numsArr.length; fast++) {
//       if (nums[fast] !== '#') {
//         numsArr[slow++] = nums[fast];
//       } else if (nums[fast] === '#' && slow !== 0) {
//         // 当fast指针遇到#，slow指针进行回退，直到到达0索引
//         slow--;
//       }
//     }
//     return numsArr.slice(0, slow).join('');
//   }
//   return caculate(s) === caculate(t);
// };
// backspaceCompare("a##c", "#a#c");

// 进出栈解法
// 时间复杂度为 On+m，空间复杂度为On+m
function backspaceCompare(s, t) {
  const s1 = []
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    if (element !== '#') {
      s1.push(element)
    }
    else {
      s1.pop()
    }
  }
  const s2 = []
  for (let i = 0; i < t.length; i++) {
    const element = t[i]
    if (element !== '#') {
      s2.push(element)
    }
    else {
      s2.pop()
    }
  }
  return s1.join('') === s2.join('')
}

/**
 * 官解，双指针解法，时间为 On+m、空间复杂度为O1
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare2(s, t) {
  let i = s.length - 1
  let j = t.length - 1
  // s、t还有几个未消除的#数量
  let skipS = 0
  let skipT = 0

  while (i >= 0 || j >= 0) {
    // 找到s的第一个有效字符（即经过#消除后）
    while (i >= 0) {
      if (s.charAt(i) === '#') {
        skipS++
        i--
      }
      else if (skipS > 0) {
        skipS--
        i--
      }
      else {
        break
      }
    }
    // 找到j的第一个有效字符
    while (j >= 0) {
      if (t.charAt(j) === '#') {
        skipT++
        j--
      }
      else if (skipT > 0) {
        skipT--
        j--
      }
      else {
        break
      }
    }

    // i、j都大于0后进行对比
    if (i >= 0 && j >= 0) {
      if (s.charAt(i) !== t.charAt(j)) {
        return false
      }
    }
    else {
      // i、j有任一一个数大于0，则return false，因为有一边走完了，另一边没走完
      if (i >= 0 || j >= 0) {
        return false
      }
    }
    i--
    j--
  }
  return true
}
