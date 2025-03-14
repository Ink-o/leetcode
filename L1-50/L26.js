function removeDuplicates(nums) {
  let slow = 1
  let fast = 1
  const len = nums.length
  while (fast < len) {
    if (nums[fast] !== nums[slow]) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return slow
}
