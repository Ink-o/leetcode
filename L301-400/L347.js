/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  class Heap {
    constructor(compareFn) {
      this.compareFn = compareFn
      this.queue = []
    }
    // 添加
    push(item) {
      // 推入元素
      this.queue.push(item)

      // 上浮
      let index = this.size() - 1 // 记录推入元素下标
      let parent = Math.floor((index - 1) / 2) // 记录父节点下标

      // 判断 parent 是否大于 0，防止数组越界
      while (parent >= 0 && this.compare(parent, index) > 0) {
        [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]]

        // 更新下标
        index = parent
        parent = Math.floor((index - 1) / 2)
      }
    }
    // 获取堆顶元素并移除
    pop() {
      // 堆顶元素
      const out = this.queue[0]
      // 移除堆顶元素，填入最后一个元素
      this.queue[0] = this.queue.pop()

      // 下沉
      let index = 0 // 记录下沉元素下标
      let left = 1 // left 是左子节点下标，left + 1则是右子节点下标（针对于根节点，左叶子节点为 1。其他叶子节点的左子节点为 2 * index + 1）
      // 这里取小根堆的话，searchChild 就是取较小的值去替换，this.queue[left] > this.queue[left + 1] 时取 left + 1
      let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left
      // 判断 searchChild 是否越界
      while (searchChild < this.size() && this.compare(index, searchChild) > 0) {
        [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]]

        // 更新下标
        index = searchChild
        // 注意这里的左叶子节点为 2 * index + 1
        left = 2 * index + 1
        // 同上判断，取最小值作为目标值与目标元素替换
        searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left
      }
      return out
    }
    size() {
      return this.queue.length
    }
    // 使用传入的 compareFn 比较两个位置的元素
    compare(index1, index2) {
      // 处理下标越界问题
      if (this.queue[index1] === undefined) return 1
      if (this.queue[index2] === undefined) return -1
      return this.compareFn(this.queue[index1], this.queue[index2])
    }
  }

  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  // 创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1])

  // entry 中存放了 k 和 v
  for (const entry of map.entries()) {
    heap.push(entry)

    if (heap.size() > k) {
      heap.pop()
    }
  }

  const res = []
  for (let i = heap.size() - 1; i >= 0; i--) {
    res[i] = heap.pop()[0]
  }
  return res
};
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));