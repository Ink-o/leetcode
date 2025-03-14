/**
 * @param {string} haystack 文本串
 * @param {string} needle 模板串
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle.length === 0)
    return 0
  // 获取前缀表
  // 前缀表是用来回退的，它记录了模式串与主串(文本串)不匹配的时候，模式串应该从哪里开始重新匹配
  // 记录下标i之前（包括i）的字符串中，有多大长度的相同前缀后缀。
  // 前缀表具有告诉我们当前位置匹配失败，跳到之前已经匹配过的地方的能力。
  // 前缀表构建过程看代码随想录
  const getNext = (needle) => {
    let j = -1
    const next = [j]
    // i 从 1 开始
    for (let i = 1; i < needle.length; i++) {
      // 前后缀（i是后缀，j是前缀）不相同了，向前回退，j 是一直被赋值为 next[j] 的，因为最终还是要回退到 -1
      while (j >= 0 && needle[i] !== needle[j + 1]) {
        j = next[j]
      }
      // 找到了相同的前后缀
      if (needle[i] === needle[j + 1]) {
        j++
      }
      next.push(j) // 将 j（前缀的长度）赋给 next[i]
    }
    return next
  }
  const next = getNext(needle)
  let j = -1 // 这里的 j 是根据匹配度进行+1的
  // 这里的 i 从 0 开始
  // 整个对比看代码随想录
  for (let i = 0; i < haystack.length; i++) {
    // 当不匹配时，模板串进行回退
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      // j 寻找之前匹配的位置
      j = next[j]
    }
    // 匹配，j和i同时向后移动
    if (haystack[i] === needle[j + 1]) {
      j++
    }
    // j 到达了 needle 的最后一个索引，说明子串完全匹配
    if (j === needle.length - 1) {
      // 返回当前索引 - 1
      return i - needle.length + 1
    }
  }
  return -1
}
