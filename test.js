// 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

// 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

// 以数组形式返回答案。


// 输入：nums = [8,1,2,2,3]
// 输出：[4,0,1,1,3]
// 解释： 
// 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
// 对于 nums[1]=1 不存在比它小的数字。
// 对于 nums[2]=2 存在一个比它小的数字：（1）。 
// 对于 nums[3]=2 存在一个比它小的数字：（1）。 
// 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const map = new Map()
  const arr = [...nums]
  const res = []
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    // 只需要记录第一次出现的元素当前的索引值作为 比其前面小的元素
    if (!map.has(arr[i])) {
      map.set(arr[i], i)
    }
  }

  for (let i = 0; i < nums.length; i++) {
    res[i] = map.get(nums[i])
  }
  return res
};
console.log(smallerNumbersThanCurrent([5,0,10,0,10,6]));