/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // const map = new Map();
    // // 记录元素出现频次
    // for (const num of nums) {
    //     map.set(num, (map.get(num) || 0) + 1);
    // }

    // // 创建小根堆
    // const priorityQueue = new PriorityQueue((a, b) => a[1] - b[1]);

    // // entity 是一个长度为2的数组，0位置存储key，1位置存储value
    // // priorityQueue中只能保存k个元素，超过k个元素时，直接进行出堆（出的是出现次数最小的）
    // for (const entry of map) {
    //     priorityQueue.push(entry);
    //     if (priorityQueue.size() > k) {
    //         priorityQueue.pop();
    //     }
    // }

    // const ret = [];
    
    // for (let i = priorityQueue.size() - 1; i >= 0; i--) {
    //     ret[i] = priorityQueue.pop()[0]
    // }
    // return ret;

    const map = new Map();
    let ret = [];
    for (const num of nums) {
        map.set(num , (map.get(num) || 0) + 1);
    }
    let priorityQueue = new PriorityQueue((a, b) => a[1] - b[1]);
    // 批量进堆
    for (const entries of map) {
        priorityQueue.push(entries);
        // if (priorityQueue.size() > k) {
        //     priorityQueue.pop();
        // }
    }
    console.log(priorityQueue.queue);
    for (let i = priorityQueue.size() - 1; i >= 0; i--) {
        const element = priorityQueue.pop()[0];
        ret[i] = element;
    }
    return ret;
};
// 自建堆
class PriorityQueue {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }
    push(item) { // 添加（每次元素插入都需要对堆进行重新排序）
        this.queue.push(item);
        let index = this.queue.length - 1;
        let parent = Math.floor((index - 1) / 2);
        // 上浮（当index = 0 的时候，parent的值可能小于0，此时会数组越界，所以得保证 parent 大于0）
        while (parent >= 0 && this.compare(parent, index) > 0) {
            // 元素和父元素交换
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2)
        }
    }
    pop() { // 获取堆顶元素并移除
        const ret = this.queue[0];

        // 把最后一个节点移到堆顶
        this.queue[0] = this.queue.pop();

        // 头节点
        let index = 0;
        // 左子节点的下标(头节点的左节点索引是直接index + 1)，left + 1 就是右子节点下标
        let left = 1;
        // 对比左右节点谁更大
        let selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

        // 下沉
        // selectChild可能会发生undefined情况，所以需要进行判断是否为undefined
        while (selectedChild !== undefined && this.compare(index, selectedChild) > 0) {
            // 交换
            [this.queue[index], this.queue[selectedChild]] = [this.queue[selectedChild], this.queue[index]];
            index = selectedChild;
            left = 2 * index + 1;
            selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }
        return ret;
    }
    size() {
        return this.queue.length;
    }
    // 使用传入的 compareFn 比较两个位置的元素
    compare(index1, index2) {
        if (this.queue[index1] === undefined) {
            return 1;
        }
        if (this.queue[index2] === undefined) {
            return -1;
        }
        return this.compareFn(this.queue[index1], this.queue[index2]);
    }
}
console.log(topKFrequent([1,1,1,2,2,3], 2));