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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let ret = [];
    process(root, '');
    return ret;
    // 
    function process(root, prefix) {
        if (!root) {
            return;
        }
        // 如果当前节点为叶子节点，则往结果数组中添加元素
        if (!root.left && !root.right) {
            ret.push(`${prefix}${root.val}`);
        }
        // 更新前缀
        prefix += `${root.val}->`;
        // 继续深度优先遍历
        process(root.left, prefix);
        process(root.right, prefix);
    }
};