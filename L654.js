/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 使用额外索引
 */
var constructMaximumBinaryTree = function(nums) {
    const buildTree = (arr, left, right) => {
        // 当left指针小于right指针索引时，直接返回null
        if (left > right) {
            return null;
        }

        // 找到最大值和最大索引
        let maxValue = -1;
        let maxIndex = -1;
        // 注意，这里是左闭右闭的区间
        for (let i = left; i <= right; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;                
            }
        }

        // 构建根节点
        let root = new TreeNode(maxValue);
        // 构建左节点，传递maxIndex的左区间
        root.left = buildTree(arr, left, maxIndex - 1);
        // 构建右节点，传递maxIndex的右区间
        root.right = buildTree(arr, maxIndex + 1, right);
        return root;
    }
    let root = buildTree(nums, 0, nums.length - 1);
    return root;
};
constructMaximumBinaryTree([3,2,1,6,0,5]);

/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 思路与上面相同，只不过传递的是一个数组而已，不再传递边界
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }

    let maxValue = -1;
    let maxIndex = -1;
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
            maxIndex = i;                
        }
    }

    let root = new TreeNode(maxValue);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    return root;
};
