var longestConsecutive = function (nums) {
  let set = new Set(nums);
  // 数字去重，如果有大量重复元素的话，将会变的非常慢（现在直接超时了）
  let arr = [...set]
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    // 注意这里需要取准确值，目标值为arr
    let cur = arr[i];
    // 只有当num - 1不存在时，才开始向后遍历num+1,num+2,num+3（确保此时是最小值，优化要做，不然没办法通过所有实例）
    if (!set.has(cur - 1)) {
      while (set.has(cur + 1)) {
        cur++;
      }
    }
    // [set[i], cur]之间是连续的，数字有 cur - num + 1个
    ans = Math.max(ans, cur - arr[i] + 1);
  }
  return ans;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
