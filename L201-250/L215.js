/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let len = nums.length;
    for (let i = nums.length - 1; i >= 0; i--) {
        heapify(nums, i, nums.length);
    }
    while(k--) {
        // 第一个元素和最后一个元素替换
        swap(nums, 0, --len);
        // 然后再进行排序，不断缩小长度
        heapify(nums, 0, len);
    }
    return nums[len];

    function heapify(arr, index, size) {
        let child = 2 * index + 1;
        // 下沉操作
        while (child < size) {
            let largeSet = (child + 1 < size) && arr[child + 1] > arr[child] ? child + 1 : child;
            largeSet = arr[index] > arr[largeSet] ? index : largeSet;
            if (largeSet === index) {
                break;
            }
            swap(arr, largeSet, index);
            index = largeSet;
            child = 2 * index + 1;
        }
    }
    function swap(arr, a, b) {
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
};
console.log(findKthLargest([1,3,7,5], 2));