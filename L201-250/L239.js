/**
 * 原理：使用一个单调递减数组（存储可能成为最大值的值即可），遍历元素时动态调整单调递减数组
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  // 单调递减队列，数值从大到小排列
  class MonoQueue {
    constructor() {
      this.queue = []
    }

    // 入队
    enqueue(value) {
      // 当前队尾元素
      let back = this.queue[this.queue.length - 1]
      // 如果传入进来的元素比当前元素要大，则删除队尾元素。直到执行到第一个比value大的元素
      // 注意这里不能直接使用 !back，因为back可能为0
      while (back !== undefined && back < value) {
        this.queue.pop()
        back = this.queue[this.queue.length - 1]
      }
      // 最后插入新增的元素
      this.queue.push(value)
    }

    // 出队
    dequeue(value) {
      const front = this.front()
      // 如果队头元素等于当前元素value，则进行出队
      if (front === value) {
        this.queue.shift()
      }
    }

    // 返回队头元素
    front() {
      return this.queue[0]
    }
  }
  const helperQueue = new MonoQueue()
  // i 为上间区间的指针，j当前区间的指针
  // 下面的每次循环 i都需要进行出队，j需要进队
  let i = 0
  let j = 0
  const resArr = []
  // 先进3个数，形成单调递减队列
  while (j < k) {
    helperQueue.enqueue(nums[j++])
  }
  // 先添加第一个区间最大，这个数肯定是0-k区间最大的数值
  resArr.push(helperQueue.front())
  while (j < nums.length) {
    // 入队当前遍历的元素
    helperQueue.enqueue(nums[j])
    // 出队上个区间进队的元素
    helperQueue.dequeue(nums[i])
    // 结果数组增加
    resArr.push(helperQueue.front())
    i++
    j++
  }
  // console.log(helperQueue);
  return resArr
}
