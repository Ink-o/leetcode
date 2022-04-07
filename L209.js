var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    let l = r = sum = 0;
    let res = len + 1; // 子数组不会超过自身
    while(r < len) {
        // 右指针滑动
        sum += nums[r++];
        // 窗口滑动直到值大于target
        while (sum >= target) {
            // r 始终为开区间 [l, r)
            res = res < r - 1 ? res : r - 1;
            sum -= nums[l++];
        }
    }
    return res > len ? 0 : res;
}