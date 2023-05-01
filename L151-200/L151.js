let reverseWords = function (s) {
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpaces(strArr);
  // 翻转
  reverse(strArr, 0, strArr.length - 1);

  let start = 0;

  for (let i = 0; i <= strArr.length; i++) {
    // 这里到尾部也需要进行处理反转，要不然最后一个单词无法进行反转复原
    if (strArr[i] === ' ' || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }
  return strArr.join('');
}
function removeExtraSpaces(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;

  while (fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    // 当有连续空格或者开头有空格时候快指针移动
    if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++];
    }
  }
  // 移除末尾空格
  // slowIndex 这个索引是遍历完之后的索引，这个索引是无效的，slowIndex - 1 才是最后一个有效的索引
  // slowIndex - 1下标就相当于slowIndex长度了，如果最后一位为空格，那么，长度就设置为slowIndex-1，否则还是设置为slowIndex
  strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

function reverse(strArr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    // 进行交换
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}
console.log(reverseWords("the sky is blue"));