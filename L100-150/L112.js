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
 * @param {number} targetSum
 * @return {boolean}
 * 后序遍历
 */
var hasPathSum = function(root, targetSum) {
    let ret = false;
    function process(root, cur) {
        if (!root) {
            return;
        }
        // 更新当前的总和
        let curSum = cur + root.val;
        process(root.left, curSum);
        process(root.right, curSum);
        // 后序遍历，判断是不是叶子节点，如果是叶子节点的话，就进行值对比
        if (!root.left && !root.right) {
            if (curSum === targetSum) {
                ret = true;
            }
        }
    }
    process(root, 0);
    return ret;
};
console.log(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22));