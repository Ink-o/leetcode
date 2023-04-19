var removeDuplicates = function(nums) {
    let slow = 1,
        fast = 1,
        len = nums.length;
    while (fast < len) {
        if (nums[fast] !== nums[slow]){
            nums[slow++] = nums[fast];
        }
        fast++;
    }
    return slow;
}