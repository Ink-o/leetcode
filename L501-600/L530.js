/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let res = [];
    let minVal = Infinity;
    inOrder(root);

    // 拿到结果数组，然后进行差值获取
    for (let i = 1; i < res.length; i++) {
        minVal = Math.min(minVal, res[i] - res[i - 1]);
    }
    
    return minVal;
    // 中序遍历，收集数据。二叉搜索树收集出来的数组是从小到大有序
    function inOrder(root) {
        if (!root) return;
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }
};