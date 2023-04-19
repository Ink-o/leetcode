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
 */
 var sortedArrayToBST = function(nums) {
    const buildTree = (Arr, left, right) => {
        // 当左指针大于右指针的时候，返回null
        if (left > right) {
            return null;
        }
        // 每次取中间值构建节点
        let mid = Math.floor((left + right) / 2);
        
        // 创建新的节点
        let root = new TreeNode(Arr[mid]);

        // 继续递归构建树
        root.left = buildTree(Arr, left, mid - 1); 
        root.right = buildTree(Arr, mid + 1, right); 
        return root;
    }
    return buildTree(nums, 0, nums.length - 1);
};